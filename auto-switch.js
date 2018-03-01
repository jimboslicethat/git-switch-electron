// TODO: Where should this file live?

const childProcess = require('child_process')
const net = require('net')

const SOCKET_PATH = '/var/folders/bg/pzd6vdg14p55lsc2sx0zc2cc0000gp/T/git-switch.sock'
const GIT_SWITCH_DIRECTORY = '/Users/dev/dev/git-switch-electron'
const LAUNCH_GIT_SWITCH_COMMAND = 'npm run start --- -- rotate'

function sendAutoRotateCommand() {
  const socket = net.connect(SOCKET_PATH)
  socket.on('error', handleConnectError)
  socket.on('connect', () => { socket.end('rotate') })
}

function handleConnectError(err) {
  if (err.code !== 'ENOENT')
    throw err

  console.log(`Looks like git-switch isn't running. Launching...`)
  launchGitSwitch()
}

function launchGitSwitch() {
  const cmdParts = LAUNCH_GIT_SWITCH_COMMAND.split(' ')
  const subprocess = childProcess.spawn(cmdParts[0], cmdParts.slice(1), {
    cwd: GIT_SWITCH_DIRECTORY,
    detached: true,
    stdio: 'ignore'
  })

  subprocess.unref()
}

sendAutoRotateCommand()

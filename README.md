# Git Switch
Cross-platform electron app for managing git users while pair/mob programming

## Installation
* You will find deployables for each of the 3 major platforms [here](https://github.com/pluralsight/git-switch-electron/releases).
* Install git-switch for your platform and run it.
* You should see a new tray item with the git-switch icon.
* Add your git repos and pair/mob users.
* Enjoy!

## How it works
Git Switch adds a post commit hook to the git repositories you specify.

You select the users to add to your pair/mob, and commit changes to your code.

With each commit, the git-switch commit hook amends the commit to designate the author separate from the co-author(s).

Once each commit is complete, git-switch will automatically rotate users in your pair/mob, so the next user will be the author on the next commit.

## Development
To run git-switch from source, run the following command:
```
npm run start
```

To launch the electron app with the chrome dev tools open by default, simply run:
```
npm run start:dev
```

## Creating & Publishing a Release

### Creating a Release
The following command utilizes `electron-forge` to build the application for all 3 major platforms.
```
npm run release:create
```

An `/out` directory will be created containing the zipped deployables for Linux, MacOS, and Windows.

### **Mac Users**
* Building an Electron app for the Windows target platform requires [Wine 1.6](https://www.winehq.org/) or later to be installed.
* We recommend you install `wine` via [homebrew](https://brew.sh/):
```
brew cask install xquartz
brew install wine
```

### **Linux Users**
* Building an Electron app for the Windows target platform requires [Wine 1.6](https://www.winehq.org/) or later to be installed.
* Directions for installing `wine` on Linux can be found [here](https://www.winehq.org/download)

### Publishing a Release

There are two options for publishing a release:

#### Manual Publish:
Once new packages have been generated locally, you can drag the zipped `./out` packages onto the [Create Release Page](https://github.com/pluralsight/git-switch-electron/releases/new) in github.

#### Publish via CLI
You can publish releases programatically by installing [hub](https://github.com/github/hub) _(github's cross platform cli tool)_ by running:
```
npm run release:publish <0.0.1> (insert semver release version)
```
This will trigger the `hub release` command.

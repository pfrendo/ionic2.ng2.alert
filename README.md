[projectUri]: http://stash.betsson.local/projects/OBGUW/repos/obg.ng.ui.skeleton
[projectGit]: http://stash.betsson.local/scm/obguw/obg.ng.ui.skeleton.git
[changeLog]: ./doc/CHANGELOG.md

[contribWiki]: https://wikisson.betsson.local/display/SG/Contribution+Guidelines
[releaseWorkflowWiki]: https://wikisson.betsson.local/display/SG/Prepare+new+Release+for+Library
[setupMachineWiki]: https://wikisson.betsson.local/display/SG/Setup+Machine+for+Development+-+Libraries

# obg.ng.ui.skeleton
OBG UI Skeleton


**Quick links**

[Change logs][changeLog] | [Project Repository][projectUri] | [Contribution guidelines][contribWiki]

# Getting Started

## Installation

```
bower install obg.ng.ui.skeleton --save

tsd install XXX YYY ZZZ --save
tsd link
```

### Register Module Dependency

```javascript
import {skeletonConsts} from "obg.ng.ui.skeleton";
let app = angular.module("myApp", [skeletonConsts.moduleName])
```
## Usage
```html
<obg-skeleton ....></obg-skeleton>
```

# Contributing to the project
In order to contribute please read the [Contribution guidelines][contribWiki].

## Setup Machine for Development
Install/setup the machine by following [Setup Machine for Development - Libraries WIKI][setupMachineWiki].

### Cloning Repo

- Open SourceTree
- Clone project repo from [project git][projectGit]
- Switch to `develop` branch


## Project Setup
The following process need to be executed in order to get started.

```
npm install
```
**NOTE: npm install will automatically install bower as if manually invoking `bower install`** 


## Building the code

```
gulp build
```
In order to view all other tasks invoke `gulp` or check the gulp tasks directly.

## Running the tests

```
gulp test
```


## Development utils

### Trigger gulp watch
Handles compiling of changes.
```
gulp watch
```

### Running Continuous Tests
Spawns test runner and keep watching for changes.
```
gulp tdd
```


## Preparation for Release

```
gulp prepare-release --bump major|minor|patch|prerelease (default: patch) --version-suffix rc (default: alpha - only applies to prerelease)
```
Check out the [release workflow guide][releaseWorkflowWiki] in order to guide you creating a release and distributing it.
---
# MTBparks.com store - Frontend
---

[![Dependency Status](https://david-dm.org/palcisto/mtbparks.svg)](https://david-dm.org/palcisto/mtbparks)
[![devDependency Status](https://david-dm.org/palcisto/mtbparks/dev-status.svg)](https://david-dm.org/palcisto/mtbparks#info=devDependencies)

Front end code repository for the MTBparks.com store app.

## Setup

### Dependencies
* [Node and npm](https://nodejs.org/)
* [Bower](http://bower.io/) - `npm install -g bower`
* [Gulp](http://gulpjs.com/) - `npm install -g gulp`

### Environment
1. `cd MTBparks`
1.  `npm install`

## Build Process

**NOTE:**  The hostname must be the same as your rails app ui for the cookie to be "passed" correctly.

### Development
Run `gulp serve` to view and work with the application locally.

The `gulp serve` command will call the necessary tasks for building all application assets and moving files to a newly generated **dev_build** folder. Once all build-related tasks are complete, a local server will start running at **http://localhost:8000/** and watch for changes made to any css, javascript, or html file under the **src** folder. When a change is saved, the browser will automatically reload.

### Production
Run `gulp build:prod` to build the application for production.

The `gulp build:prod` command will call the necessary tasks for building all application assets and moving files to a newly generated **prod_build** folder. You can optionally run `gulp serve:prod` to view the build locally at **http://localhost:8000/**.

## Gulp

### Overview
All gulp tasks have been split out into separate files under the **gulp** folder. This modular approach allows for better maintainability and organization of the build process as the app matures. 

The **gulpfile.js** file is intended to act as a global file and is configured to sync all task files in the gulp folder. The paths variable, as its name indicates, lists paths to directories that are used frequently in the gulp tasks. Each task file in the gulp folder has access to the paths variable.

Some code within certain tasks is run conditionally using the [gulp-if](https://github.com/robrich/gulp-if) plugin. This is so that code shared between build-related tasks (i.e. dev vs. prod) is not duplicated.

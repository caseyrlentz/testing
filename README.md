# Documentation

This document should be updated with any changes made

# Development 
1. pull down this repo.
2. `cd`  into the root of the project 
3. run `npm install`. Wait for all dependencies to download
4. take a look at the `gulpfile.js` file. There is a bit of documentation in that file on development tasks. There are two primary tasks you should note: 
- `gulp` this is a global task that runs watchers and will also start browserSync.
- `gulp build` will run all tasks but omit the browsersync. This task includes putting files in the dist folder, minifies, concatinates, and does image minification. 
- the `gulp` and `gulp build` tasks should be run in the root or next to the `gulpfile.js`

** note when developing locally and using browserSync you will need to change where you assets point to (js , css), this is a work in progress **

# Repo Management

In theory we should only keep track of the non compiled files for ease of conflict managment.

# Production
production files should be compiled to `/dist/`
## Welcome to My Repo

Requirements

I should be able to add a todo item
I should be able to mark the todo item complete
I should be able to toggle the todo item back to uncomplete
I should be able to delete the todo item so it's not in view any more.
Make sure your data matches your DOM at all times



## Usage

This template contains some simple `gulp` tasks. They are as follows:


- `gulp watch`: This will launch a Node Server and start the standard `watchlist` task
- `gulp bower`: This will move the bower components into their proper location. This will run during the `watch` task, but you may need to run it manually once in a while
- `gulp handlebars`: This will compile your handlebars (`.hbs`) files for you. Again, `watch` will watch for changes, but if you add new files, you'll need to run this or restart the `gulp watch` command.

There are many more tasks, and you really should read through the `gulpfile.js`, but the ones above will take care of you in most cases.

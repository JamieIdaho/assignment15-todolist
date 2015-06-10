## Welcome to My Repo

This is a simple to-do list that lets you add an item, toggle the item between complete/incomplete, remove incomplete items and remove all items. It also has a counter function that displays how many to-do items are incomplete.

The most exciting part of the to-do list is that when an item is marked as complete, a martini glass appears!

Lastly, the data matches the html at all times.



## Usage

This template contains some simple `gulp` tasks. They are as follows:


- `gulp watch`: This will launch a Node Server and start the standard `watchlist` task
- `gulp bower`: This will move the bower components into their proper location. This will run during the `watch` task, but you may need to run it manually once in a while
- `gulp handlebars`: This will compile your handlebars (`.hbs`) files for you. Again, `watch` will watch for changes, but if you add new files, you'll need to run this or restart the `gulp watch` command.

There are many more tasks, and you really should read through the `gulpfile.js`, but the ones above will take care of you in most cases.

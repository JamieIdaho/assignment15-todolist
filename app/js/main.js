//Todo blueprint
var Todo = function (options) {
  var args = options || {};
  this.task = args.task;
  this.status = 'Open';
};

//task list
var storageBin= [];


// set up submit
// on submit create new instance
$('#addTask').on('submit', function(event)  {

  event.preventDefault();
  var taskText = $('#taskText').val();
  var taskInstance = new Todo({ task: taskText });

// store for later
  storageBin.push(taskInstance);

  $('#tasks').append('<li>' + taskText + '</li>');

  //reset form
  this.reset();

});

//toggle item

$('#tasks').on('click', 'li', function (event) {

  event.preventDefault();
  //grab list item clicked on
  //mark item as completed
  $(this).addClass('complete');

  var tTask = $(this).text();
  var taskToEdit = _.find(storageBin, {task: tTask});

  taskToEdit.status = 'Closed';

  });

$('#tasks').on('click', '.complete', function (event) {

   event.preventDefault();
   $(this).removeClass('complete');
   var tTask = $(this).text();
   var taskToEdit = _.find(storageBin, {task: tTask});
   taskToEdit.status = 'Open';


  });


$('#removeCompleted').on('click', function () {

  storageBin = storageBin.filter(function(x) {

    if (x.status === 'Open') {
      return x;
    }
  storageBin.push(x);

  });

  $('#tasks').empty();

  storageBin.forEach(function(x) {
    $('#tasks').append('<li>' + x.task + '</li>');
  });


});


$('#clearAll').on('click', function () {

  $('#tasks').empty();
  storageBin = [];

});














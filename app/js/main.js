

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
  $('#tasks').append('<li class="listItem">' + taskText + '</li>');
  this.reset();
  counter();

});

//toggle item

$('#tasks').on('click', 'li', function (event) {

  event.preventDefault();
  $(this).addClass('complete');
  var tTask = $(this).text();
  var taskToEdit = _.find(storageBin, {task: tTask});
  taskToEdit.status = 'Closed';
  counter();

  });

$('#tasks').on('click', '.complete', function (event) {

   event.preventDefault();
   $(this).removeClass('complete');
   var tTask = $(this).text();
   var taskToEdit = _.find(storageBin, {task: tTask});
   taskToEdit.status = 'Open';
   counter();

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
    $('#tasks').append('<li class="listItem">' + x.task + '</li>');
  });


});


$('#clearAll').on('click', function () {

  $('#tasks').empty();
  storageBin = [];
  counter();

});

function counter(){
  var totalCount = 0;
  storageBin.forEach(function(x) {
    if (x.status === 'Open') {
      return totalCount++;
    }
    storageBin.push(totalCount);
  });
  $('.number').html(totalCount);
}














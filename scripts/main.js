(function () {

  'use strict';

  var taskname, 
      taskinstance,
      todoArea = $('#todoList'),
      todoForm = $('#addTodo'),
      todoTemplate = $('#todoTemp').html(),
      todoTemplateFunc = _.template(todoTemplate);

  // Main Object
  window.app = {};

  // Main Collection
  app.allTodos = [];

  // Main Constructor
  app.ToDo = function (taskName) {
    this.task = taskName || "";
    this.status = "incomplete";
    this.id = _.random(0, 9999);
    this.toggleStatus = function () {
      if (this.status === 'incomplete') {
        this.status = 'complete';
      } else {
        this.status = 'incomplete';
      }
    }
  }

  // Add Function
  app.addTodo = function (task) {
    app.allTodos.push(task);
    todoArea.prepend(todoTemplateFunc(task));
  };

  // Add Todo (from Form)
  // Submit Event Watcher
  todoForm.on('submit', function (event) {
    event.preventDefault();

    // Grab text from my input
    taskname = $(this).find('#text').val();

    // Create a new Todo
    taskinstance = new app.ToDo(taskname);

    // Run the function addTodo
    app.addTodo(taskinstance);

    // Clear the form
    this.reset();
  });

  // Create click event for toggleing todos
  todoArea.on('click', 'li', function (event) {
    event.preventDefault();

    var thisTask = event.target;
    var thisTaskID = Number(thisTask.id);

    var thisTaskInstance = _.findWhere(app.allTodos, { id: thisTaskID });

    thisTaskInstance.toggleStatus();

    $(thisTask).removeClass().addClass(thisTaskInstance.status);


  });





}());
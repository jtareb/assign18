//*(function () {

  'use strict';





 



//variables//

var taskname,
    taskinstance,
    tdList = $('#todoList'),
    layoutForm = $('#addTodo'),
    taskTemplate = $('#todoTemp').html(),
    taskTemplateFunc = _.template(taskTemplate),
    toggleAll = $('#toggle-all');

//main collection//
var allTodos  = [];    

      


//main constructor//

   var ToDo  = function (taskName) {
          
       this.task = taskName || "";
       this.status = "pending";
        this.toggleStatus = function () {
          if (this.status === 'pending') {
          this.status = 'complete';
          } else {
          this.status = 'pending';
      }
    }
  }
     

//add function//
  var addTodo = function (task) {
    allTodos.push(task);
    tdList.append(taskTemplateFunc(task));

  };

//add #addtodo//
  layoutForm.on('submit', function (event) {
    event.preventDefault();
      //grab text/
      taskname = $(this).find('#text').val();

      //create a new todo//
      taskinstance = new ToDo(taskname);
      //run the function addTodo//
      addTodo(taskinstance);
  //clear the form//
  this.reset();

});

//create click event

  tdList.on('click', 'li', function (event) {
      event.preventDefault();

      var thisTask = event.target;
     

      var thisTaskInstance = _.findWhere(app.allTodos);
        

      thisTaskInstance.toggleStatus();
//
      $(thisTask).removeClass().addClass(thisTaskInstance.status);

      });

//need an onclick after the tdList.on to generate the completion of the task in the array//









'use strict';
  
//build model//
var Todo ={};
 var Todo = Backbone.Model.extend({

    initialize: function() {
      var taskName = this.get('task');

      },

      idAttribute: '_id',
      

        defaults:{
        title: "empty todo...",
        
      }
    

    

  });

//build collection//
var TodoList = Backbone.Collection.extend ({

    initialize: function () {
    console.log('Collection Created');

  },

  model: Todo, 

  url: 'http://tiy-atl-fe-server.jerokuapp.com/collections/backbone1.jtalist'
 
  

  });


var allTodo = new TodoList;
 console.log(TodoList);





 var   
       taskName, 
       taskInstance,
       tdList = $('#todoList'),
       layoutForm = $('#addTodo'),
       taskTemplate = $('#todoTemp').html(),
       toggleAll = $('#toggle-all'),
       taskTemplateFunc = _.template(taskTemplate);
//console.log(taskName);
//console.log(taskInstance);
//console.log(tdList);
//console.log(layoutForm);
//console.log(taskTemplate);
//console.log(toggleAll);
//console.log(taskTemplate);
//console.log(taskTemplateFunc);


var allTodos = []; 


var ToDos = function (taskName) {
  this.task = taskName || "";
  this.status = "incomplete";
    this.toggleStatus = function () {
      if (this.status === 'incomplete') {
        this.status = 'complete';
      } else {
        this.status = 'incomplete';
      }
    }
  }

var addTodo = function (task) {
  allTodos.push(task);
  tdList.append(taskTemplateFunc(task));
};
 
 layoutForm.on('submit', function (event) {
    event.preventDefault();

    var taskName = document.getElementById(‘text’).value;
    taskInstance = new ToDos(taskName);
    allTodo.add(itemIinstance).save().done( function () {
    });



$(“#itemForm”)(0).reset();

});





   // taskName = $(this).find('#text').val();
   // taskInstance = new ToDos(taskName);
   // addTodo(taskInstance);


  

  

tdList.on('click', 'li', function (event) {
  event.preventDefault();
  var thisTask = event.target;
  var thisTaskInstance = _.findWhere(app.allTodo);
  thisTaskInstance.toggleStatus();
  $(thisTask).removeClass().addClass(thisTaskInstance.status);

});



    


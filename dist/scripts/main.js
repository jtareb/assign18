'use strict';
  
//build model//
var Todo ={};
 var Todo = Backbone.Model.extend({

    defaults: function() {
      return {
        title: "empty todo...",
        order: Todo.nextOrder(),
        complete: false
      };
    },

    toggle: function() {
      this.save({done: !this.get("complete")});
    }

  });

//build collection//
var TodoList = Backbone.Collection.extend ({

	    completed: function() {
        return this.where({complete: true});
    },

      remaining: function () {
      return this.where({complete: false});
    },

 
      nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    },

 
    comparator: 'order'

  });


var Todo = new TodoList;
 console.log(TodoList);

 var   taskName,
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


var allTodo = []; 


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
  allTodo.push(task);
  tdList.append(taskTemplateFunc(task));
};

layoutForm.on('submit', function (event) {
  event.preventDefault();
    taskName = $(this).find('#text').val();
    taskInstance = new ToDos(taskName);
    addTodo(taskInstance);


    this.reset();

  });

tdList.on('cick', 'li', function (event) {
  event.preventDefault();
  var thisTask = event.target;
  var thisTaskInstance = _.findWhere(app.allTodo);
  thisTaskInstance.toggleStatus();
  $(thisTask).removeClass().addClass(thisTaskInstance.status);

});



    


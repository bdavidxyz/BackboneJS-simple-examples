var app = {}; // create namespace for our app

app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});
 
app.TodoView = Backbone.View.extend({
  
  // where the view will be rendered in the DOM
  el: '#container',
  //will wrap the final result around this tag
  tagName: 'li',
  // waill wrap the final result with this class
  className: 'superRender',
  // get template where it was stored
  template: _.template($('#item-template').html()),
  // called when view instantiated
  initialize: function(){
    this.render();
  },
  //generate HTML by mixing template with data
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});

// create object with the attributes specified.
var todo = new app.Todo({title: 'Learn Backbone.js', completed: false}); 
var view = new app.TodoView({model: todo});

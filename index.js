var state = {
  todos: [{
    label: 'Wash clothes', completed: false
  }, {
    label: 'Do sessions', completed: true
  }, {
    label: 'Chill', completed: false
  }]
}

function addTodo(name, insert) {
  var todo = [{
    label: name,
    completed: false
  }];
  if (insert) {
    var newTodos = todo.concat(state.todos)
  } else {
    var newTodos = state.todos.concat(todo);
  }
  state.todos = newTodos;
}

function checkTodo(index) {
  state.todos[index].completed = !state.todos[index].completed;
}

function renderTodos() {
  return state.todos.map(function (todo, index) {
    var checked = "";
    if (todo.completed) {
      checked = "checked";
      style = "style = 'color: red'";
    } else {
      style = "style = 'color: black'";
    }
    return "<label " + style + ">" + todo.label + " <input type='checkbox' value=" + index + " " + checked + "/></label>"
  });
}

function render() {
  document.getElementById("todos").innerHTML = renderTodos().join('');
  var checkboxes = document.querySelectorAll("input[type=checkbox]")

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i]
    checkbox.addEventListener("click", changeColor.bind(checkbox));
  }
}

document.getElementById("add-button").addEventListener("click", function () {
  var todoName = document.getElementById("add-text").value;
  addTodo(todoName);
  render();
});

document.getElementById("insert-button").addEventListener("click", function () {
  var todoName = document.getElementById("add-text").value;
  addTodo(todoName);
  render();
});

function changeColor(el) {
  var index = parseInt(el.target.attributes["value"].value);
  checkTodo();
  render();
}

render();
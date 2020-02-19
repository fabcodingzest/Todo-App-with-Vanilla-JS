// Grabing elements from DOM
const input = document.querySelector('.input');
let ul = document.querySelector('.todo');
let list = document.querySelector('ul');


//Click on trash icon
function deleteTodo() {
  let deleteItem = document.querySelectorAll('.trash');
  for (item of deleteItem)
  {
    item.addEventListener('click', function (event) {
      this.parentNode.remove();
      event.stopPropagation();
    })
  }
}
// Do something when we press enter on input
input.addEventListener('keypress', function (event) {
  if (event.which === 13)
  {
    //grab text from input
    let todoText = this.value;
    this.value = "";
    // create a new li and add it to ul
    let li = document.createElement("li");
    let spanElement1 = document.createElement("span");
    let spanElement2 = document.createElement("span");
    let icon1 = document.createElement("i");
    let icon2 = document.createElement("i");

    icon1.classList.add("fas", "fa-pencil-alt");
    spanElement1.append(icon1);
    icon2.classList.add("fas", "fa-trash-alt");
    spanElement2.classList.add("trash");
    spanElement2.append(icon2);
    if (todoText !== "") ul.appendChild(li).append(spanElement1, todoText, spanElement2);
    completedTodo();
    deleteTodo();
  }
});
sessionStorage.setItem('todoList', ul.innerHTML);

function loadTodo() {
  if (sessionStorage.getItem('todoList'))
  {
    ul.innerHTML = sessionStorage.getItem('todoList');
    deleteTodo();
  }
}

loadTodo();

// When li is clicked
function completedTodo() {
  let listItems = ul.getElementsByTagName('li');
  for (li of listItems)
  {

    li.addEventListener('click', function () {
      if (this.classList.contains('completed'))
      {
        this.classList.remove('completed');
      } else
      {
        this.classList.add('completed');
      }
    })
  }
}


// Grabing elements from DOM
const input = document.querySelector('.input');
let ul = document.querySelector('.todo');
let list = document.querySelector('ul');
let saveBtn = document.querySelector('.save');
let clearBtn = document.querySelector('.clear');

//delete item when user clicks on trash icon
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
    deleteTodo();
  }
});

//Save data to localStorage with save btn
saveBtn.addEventListener('click', function () {
  localStorage.setItem('todoList', ul.innerHTML);
})

//Clear data from localStorage with clear Btn
clearBtn.addEventListener('click', function () {
  ul.innerHTML = ''
  localStorage.removeItem('todoList', ul.innerHTML);
})

// Load Todo's from LocalStorage
function loadTodo() {
  if (localStorage.getItem('todoList'))
  {
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}

// toggle Check item when li is clicked
ul.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI')
  {
    ev.target.classList.toggle('completed');
  }
}, false
);

//call loadTodo Funtion to load localStorage data
loadTodo();

//implement Delete Todo Functionality
deleteTodo();

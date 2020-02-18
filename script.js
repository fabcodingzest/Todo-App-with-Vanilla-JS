// Grabing elements from DOM
const input = document.querySelector('.input');
let ul = document.querySelector('.todo');
let listItems = ul.getElementsByTagName('li');
const addTodo = () => {
  alert("it works");
}


// Do something when we press enter on input
input.addEventListener('keypress', function (keypressed) {
  if (keypressed.which === 13)
  {
    addTodo()
  }
});

// When li is clicked
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
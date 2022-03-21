//selecting html element
let  ToDoInput = document.querySelector(".to-do");
let  ToButton = document.querySelector(".to-btn");
let  ToDoList = document.querySelector(".todo-ul");
//adding event  Listener
ToButton.addEventListener('click',addto);

// add another  evevnt listener
ToDoList.addEventListener('click',Del);


// add functions
function addto(e){
    // creat ToDo list div
    const  todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')


    // CREAT A LIST LI
    const  todoLi = document.createElement('li')
    todoLi.classList.add('todoItems')

    todoLi.innerText = ToDoInput.value

    todoDiv.appendChild(todoLi)
//trash button
const trshbtn = document.createElement('button')
trshbtn.classList.add('trash')
trshbtn.innerText = "-Del"

todoDiv.appendChild(trshbtn)




    ToDoList .appendChild(todoDiv)
/// clear  input
ToDoInput.value = "";


}

//delete function
function Del(e){
    const item = e.target
    if(item.classList[0]==='trash'){

        const todo =item.parentElement
        todo.remove();
    }

}
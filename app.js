// Define UI Var

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listners

loadEventListners();

// Load all event listners

function loadEventListners() {
    //DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    // add task event
    form.addEventListener('submit', addTask);
    // Remove Task Event
    taskList.addEventListener('click', removeTask);
    // Clear Task Event
    clearBtn.addEventListener('click', clearTasks);
    //Filter Tasks Event
    filter.addEventListener('keyup', filterTasks);
}

//Get Task From Local Storage
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){

// Create LI Element
const li = document.createElement('li');
//Add Class
li.className = "collection-item";
// Create text node and append to li
li.appendChild(document.createTextNode(task));
// Create new link element
const link = document.createElement('a');
// Add Class
link.className = 'delete-item secondary-content';
// Add Icon HTML
link.innerHTML = '<i class= "fa fa-remove"></i>';
//Append link to li
li.appendChild(link);
//Append li to ul
taskList.appendChild(li);
    });
}

// Add Task
function addTask() {
if(taskInput.value === '') {
    alert('Add A Task');
}

// Create LI Element
const li = document.createElement('li');
//Add Class
li.className = "collection-item";
// Create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));
// Create new link element
const link = document.createElement('a');
// Add Class
link.className = 'delete-item secondary-content';
// Add Icon HTML
link.innerHTML = '<i class= "fa fa-remove"></i>';
//Append link to li
li.appendChild(link);
//Append li to ul
taskList.appendChild(li);

//Local Storage
storeTaskInLocalStorage(taskInput.value);

// Clear Input
taskInput.value = '';

// console.log(li);


    e.preventDefault();
}

//Store Task
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')){
    e.target.parentElement.parentElement.remove();

//Remove from Local Storage
removeTaskFromLocalStorage
    (e.target.parentElement.parentElement);

    }
}

}

//Remove from local Storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear Tasks
function clearTasks() {
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

//Clear from local Storage
clearTasksFromLocalStorage();
}

//Clear Tasks from Local Storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

//Filter List
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}

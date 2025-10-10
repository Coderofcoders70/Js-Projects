const addTask = document.getElementById('add-task');
const inputTask = document.getElementById('input-task');
const taskContainer = document.getElementById('task-container');

addTask.addEventListener("click", function() {

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerHTML = `${inputTask.value}`;
    task.appendChild(li);
    
    let checkButton = document.createElement('button');
    checkButton.innerHTML = `<i class="fa-solid fa-check"> </i>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let removeButton = document.createElement('button');
    removeButton.innerHTML = `<i class="fa-solid fa-trash-can"> </i>`;
    removeButton.classList.add('deleteTask');
    task.appendChild(removeButton);

    if (inputTask.value === "") {
        alert("Please enter a task");
    }
    else{
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkButton.addEventListener("click", function() {

        checkButton.parentElement.style.textDecoration = "line-through";
    })

    removeButton.addEventListener("click", function() {

        removeButton.parentElement.parentElement.remove();
    })
});
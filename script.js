document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');


    // Tasks array to keep track of all tasks
    let tasks = [];

    // Function to save tasks array to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a task to the DOM
    function addTaskToDOM(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = function() {
            taskList.removeChild(li);
            // Remove from tasks array and update Local Storage
            tasks = tasks.filter(t => t !== taskText);
            saveTasks();
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    // Function to load tasks from Local Storage
    function loadTasks() {
        const stored = localStorage.getItem('tasks');
        tasks = stored ? JSON.parse(stored) : [];
        taskList.innerHTML = '';
        tasks.forEach(taskText => {
            addTaskToDOM(taskText);
        });
    }

    // Initial load
    loadTasks();


    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }
        // Add to tasks array and save
        tasks.push(taskText);
        saveTasks();
        addTaskToDOM(taskText);
        taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);

    // Add task on Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
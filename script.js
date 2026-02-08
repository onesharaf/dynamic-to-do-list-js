document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // The add task function
  function addTask() {
    const taskText = taskInput.value.trim();

    // check if user input is not empty
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");

      removeButton.onclick = function () {
        taskList.removeChild(li);
      };

      li.appendChild(removeButton);
      taskList.appendChild(li);

      taskInput.value = "";
    } else {
      alert("Please enter a task");
    }
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});

// invoking the add task function once the document is fully loaded
document.addEventListener("DOMContentLoaded", addTask);document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // The add task function
  function addTask() {
    const taskText = taskInput.value.trim();

    // check if user input is not empty
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");

      removeButton.onclick = function () {
        taskList.removeChild(li);
      };

      li.appendChild(removeButton);
      taskList.appendChild(li);

      taskInput.value = "";
    } else {
      alert("Please enter a task");
    }
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});

// invoking the add task function once the document is fully loaded
document.addEventListener("DOMContentLoaded", addTask);

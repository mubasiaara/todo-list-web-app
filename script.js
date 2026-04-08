let tasks = 
  JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = task.text;
        if (task.done) span.style.textDecoration = "line-through";

        span.onclick = () => {
            tasks[index].done = !tasks[index].done;
            saveTasks();
        };

        let delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.onclick = () => {
            tasks.splice(index, 1);
            saveTasks();
        };

        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value === "") return;

    tasks.push({ text: input.value, done: false });
    input.value = "";

    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

renderTasks();

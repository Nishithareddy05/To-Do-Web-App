function addTask() {
  const taskText = document.getElementById("taskInput").value;
  const dateTime = document.getElementById("dateTimeInput").value;

  if (taskText.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${taskText}</strong><br/>
    <small>📅 ${dateTime ? new Date(dateTime).toLocaleString() : "No date"}</small>

    <div class="task-controls">
      <button onclick="toggleComplete(this)">✅ Done</button>
      <button onclick="editTask(this)">✏ Edit</button>
      <button onclick="deleteTask(this)">🗑 Delete</button>
    </div>
  `;

  taskList.appendChild(li);

  // Clear input
  document.getElementById("taskInput").value = "";
  document.getElementById("dateTimeInput").value = "";
}

function toggleComplete(button) {
  const li = button.closest("li");
  li.classList.toggle("completed");
}

function editTask(button) {
  const li = button.closest("li");
  const currentText = li.querySelector("strong").innerText;
  const newText = prompt("Edit your task:", currentText);
  if (newText !== null && newText.trim() !== "") {
    li.querySelector("strong").innerText = newText;
  }
}

function deleteTask(button) {
  const li = button.closest("li");
  li.remove();
}
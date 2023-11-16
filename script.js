let tasks = [];
function addTask() {
    const title = document.getElementById("task-title").value;
    const deadline = document.getElementById("task-deadline").value;

    if (title && deadline) {
        tasks.push({ title, deadline });
        updateTaskList();
        sendEmailNotification(title, deadline);
        document.getElementById("task-title").value = "";
        document.getElementById("task-deadline").value = "";
    }
}
function updateTaskList() {
    const tasksList = document.getElementById("tasks");
    tasksList.innerHTML = "";
    tasks.forEach((task) => {
        const listItem = document.createElement("li");
        listItem.innerText = `Task: ${task.title}, Deadline: ${task.deadline}`;
        tasksList.appendChild(listItem);
    });
}
function sendEmailNotification(title, deadline) {
    
    console.log(`Email notification sent for task '${title}' with a deadline of ${deadline}`);
}
updateTaskList();

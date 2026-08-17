

let taskInput = document.getElementById("taskinput");

let addBtn = document.getElementById("add_btn");

let taskList = document.getElementById("tasklist");


function addTask() {

    let taskText = taskInput.value

    if (taskText === "") {
        alert("لطفا یک کار را وارد کنید")
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";


    deleteBtn.addEventListener("click",function (){
        taskList.removeChild(li);
    })


}

addBtn.addEventListener("click", addTask);

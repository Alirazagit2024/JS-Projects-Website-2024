let todoInput = document.getElementById("todoInput"); // input
let addButton = document.getElementById("addButton"); // add button
let todoList = document.getElementById("todoList"); // list of tasks

addButton.addEventListener("click", function () {
    let task = todoInput.value; //value
    let list = document.createElement("li"); //khali div
    let delbtn = document.createElement("button"); //delete btn
    if(task == "") {
        alert("Sorry input abhi khali h!🤨")
        return;
    }
  list.textContent = task;
  delbtn.textContent = "delete";
  todoList.appendChild(list);
  list.appendChild(delbtn);
  todoInput.value = ""
  delbtn.addEventListener("click", deleteTask);
});


// Delete function
function deleteTask() {
  let listItem = this.parentElement; // Button ka parent <li> element
  todoList.removeChild(listItem); // Parent <li> ko UL se delete karte hain
}

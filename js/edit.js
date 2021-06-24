taskID = parseInt(JSON.parse(localStorage.getItem("currentTaskID")));
taskList = JSON.parse(localStorage.taskList);
task = taskList[taskList.findIndex(item=>item['id']==taskID)];
// rand a background
bg = Math.ceil(Math.random()*7);
document.body.style.backgroundImage="url(../img/bgImg"+bg+".jpg)";

document.getElementById("titleInput").textContent=task['title'];
document.getElementById("dateInput").value=task['date'];
document.getElementById("contentInput").value=task['content'];
function returnIndexPage(){
    window.location.href = "index.html";
}
function deleteTask(){
    id=taskList.findIndex(item=>item['id']==task['id']);
    taskList.splice(id,1);
    localStorage.setItem('taskList',JSON.stringify(taskList));
    returnIndexPage();
}
function saveTask(){
    id=taskList.findIndex(item=>item['id']==task['id']);
    taskList[id]['title']=document.getElementById("titleInput").value;
    taskList[id]['date']=document.getElementById("dateInput").value;
    taskList[id]['content']=document.getElementById("contentInput").value;
    localStorage.setItem('taskList',JSON.stringify(taskList));
    returnIndexPage();
}
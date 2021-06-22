class Task {
    constructor(title, date) {
        this.title = title;
        this.content = '';
        this.date = date;
        this.isFinished = false;
        this.star = false;
        this.today = false;
        this.id=Date.parse( new Date());
    }
}
var uncplTaskNum = 0;
var cplTaskNum = 0;
// check whether this broswer supports Web Storage
if (typeof(Storage) == "undefined") {
    alert('Sorry, your browser don\'t support Web Storage!');
}

// clear list
function clearList(listName){
    localStorage.removeItem(listName+'List');
}

// check whether has create 3 static lists 
    // normal -> normal tasks
    // today -> today's tasks
    // important -> important tasks

if(localStorage.taskList==null){
    console.log('normal blank');
    taskList=[new Task('','')];
    localStorage.setItem('taskList',JSON.stringify(taskList));
}else{
    // load the storage
    taskList = JSON.parse(localStorage.getItem('taskList'));
    console.log(taskList);
    if(taskList.length>1){
        noticeHide();
    }
    for(i=1;i<taskList.length;i++){
        task = taskList[i];
        star = 'star';
        if(task['star']==true){
            star = 'stared';
        }
        if(task['isFinished']==false){
            uncplTaskNum++;
            document.getElementById("unfinishedTaskListDiv").innerHTML += "<div id=\""+task['id']+"\" class=\"taskDiv\">\n" +
            "            <input type=\"checkbox\" class=\"check\" onchange=\"changeTaskStatement(this.parentNode)\">\n" +
            "            <div class=\"taskTextDiv\" onclick=\"openTask(this)\">\n" +
            "                <label class=\"checkTitle\">" + task['title'] + "</label><br/>\n" +
            "                <label class=\"checkDdl\">ddl: " + task['date'] + "</label>\n" +
            "            </div>\n" +
            "            <img src=\"img\/"+star+".png\" class=\"star\" height=\"30\" width=\"30\" onclick=\"addImportant(this.parentNode)\"/>"+
            "        </div>";
        }else{
            document.getElementById("finishedListDiv").innerHTML += "<div id=\""+task['id']+"\" class=\"taskDiv\">\n" +
            "            <input type=\"checkbox\" checked = true class=\"check\" onchange=\"changeTaskStatement(this.parentNode)\">\n" +
            "            <div class=\"taskTextDiv\" onclick=\"openTask(this)\">\n" +
            "                <label class=\"checkTitle\" style=\"text-decoration: line-through; color: #9d9d9d\">" + task['title'] + "</label><br/>\n" +
            "                <label class=\"checkDdl\">ddl: " + task['date'] + "</label>\n" +
            "            </div>\n" +
            "            <img src=\"img\/"+star+".png\" class=\"star\" height=\"30\" width=\"30\" onclick=\"addImportant(this.parentNode)\"/>"+
            "        </div>";
        }
        
    }
}


function openTask(taskDiv) {
    // window.location.href = "editor.html";
    // checkBox = taskDiv.firstElementChild;
    // console.log(checkBox.checked);
}

function changeTaskStatement(taskDiv) {
    state = taskDiv.firstElementChild.checked;
    taskTitle = taskDiv.childNodes[3].childNodes[1];
    if (state == true) {
        taskTitle.style.textDecoration = "line-through";
        uncplTaskNum--;
        cplTaskNum++;
        taskTitle.style.color = "#9d9d9d";
        document.getElementById("finishedListDiv").append(taskDiv);
        
        // change storage
        taskList[taskList.findIndex(item=>item.id==taskDiv.id)]['isFinished']=true;
        if (uncplTaskNum == 0) {
            noticeShow();
        }
    } else {
        uncplTaskNum++;
        cplTaskNum--;
        taskTitle.style.textDecoration = "none";
        taskTitle.style.color = "#000000";
        document.getElementById("unfinishedTaskListDiv").append(taskDiv);
        taskList[taskList.findIndex(item=>item.title==taskTitle.textContent)]['isFinished']=false;
        if (uncplTaskNum != 0) {
            noticeHide();
        }
    }
    localStorage.taskList=JSON.stringify(taskList);
}

var completedList = 0;

function showOrHideCompleted() {
    if (0 == completedList) {
        completedList = 1;
        document.getElementById("finishedListDiv").style.display = "none";
    } else {
        completedList = 0;
        document.getElementById("finishedListDiv").style.display = "";
    }
}

function addTask(newTaskDiv) {
    // get title
    title = newTaskDiv.childNodes[3].value;

    // check whether it's blank
    if(title==''){
        alert("Cannot add blank task!");
        return;
    }

    // get the ddl date
    date = newTaskDiv.childNodes[5].value;

    // create new Task with these values
    task = new Task(title,date);
    taskList.push(task);
    localStorage.setItem('taskList',JSON.stringify(taskList));
    // remove the 'No Task' notice
    uncplTaskNum++;
    noticeHide();

    // add new element to the list
    document.getElementById("unfinishedTaskListDiv").innerHTML += "<div id=\""+task.id+"\" class=\"taskDiv\">\n" +
        "            <input type=\"checkbox\" class=\"check\" onchange=\"changeTaskStatement(this.parentNode)\">\n" +
        "            <div class=\"taskTextDiv\" onclick=\"openTask(this)\">\n" +
        "                <label class=\"checkTitle\">" + title + "</label><br/>\n" +
        "                <label class=\"checkDdl\">ddl: " + date + "</label>\n" +
        "            </div>\n" +
        "            <img src=\"img\/star.png\" class=\"star\" height=\"30\" width=\"30\" onclick=\"addImportant(this.parentNode)\"/>"+
        "        </div>";
    
    // clear the input box's value
    newTaskDiv.childNodes[3].value = "";
}

function noticeHide() {
    p = document.getElementById("notice").childNodes;
    p[1].style.display="none";
    p[3].style.display="none";
}

function noticeShow() {
    p = document.getElementById("notice").childNodes;
    p[1].style.display="";
    p[3].style.display="";
}

function addImportant(taskNode){
    // get task's title
    id = taskNode.id;

    // get statement
    star = taskList[taskList.findIndex(item=>item['id']==id)]['star']
    if(star==false){
        taskList[taskList.findIndex(item=>item['id']==id)]['star']=true;
        taskNode.childNodes[5].src='img/stared.png';
    }else{
        taskList[taskList.findIndex(item=>item['id']==id)]['star']=false;
        taskNode.childNodes[5].src='img/star.png';
    }
    // change localStorage
    localStorage.taskList=JSON.stringify(taskList);
}
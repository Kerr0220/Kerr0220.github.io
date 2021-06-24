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
// rand a background
bg = Math.ceil(Math.random()*7);
document.body.style.backgroundImage="url(../img/bgImg"+bg+".jpg)";

// check whether has create static list
if(localStorage.taskList==null){
    taskList=[new Task('','')];
    localStorage.setItem('taskList',JSON.stringify(taskList));
}else{
    // load the storage
    taskList = JSON.parse(localStorage.getItem('taskList'));
    for(i=1;i<taskList.length;i++){
        task = taskList[i];
        star = 'star';
        today = 'sun';
        if(task['star']==true){
            star = 'stared';
        }
        if(task['today']==true){
            today = 'suned';
        }
        if(task['isFinished']==false){
            uncplTaskNum++;
            document.getElementById("unfinishedTaskListDiv").innerHTML += "<div id=\""+task['id']+"\" class=\"taskDiv\">\n" +
            "            <img class=\"checkIcon\" src=\"img/todo.png\" onclick=\"changeTaskStatement(this.parentNode)\" height=\"30\" width=\"30\">"+
            "            <div class=\"taskTextDiv\" onclick=\"openTask(this)\">\n" +
            "                <label class=\"checkTitle\">" + task['title'] + "</label><br/>\n" +
            "                <label class=\"checkDdl\">ddl: " + task['date'] + "</label>\n" +
            "            </div>\n" +
            "            <img src=\"img/"+today+".png\" class=\"sun\" height=\"30\" width=\"30\" onclick=\"addToday(this.parentNode)\"/>"+
            "            <img src=\"img/"+star+".png\" class=\"star\" height=\"30\" width=\"30\" onclick=\"addImportant(this.parentNode)\"/>"+
            "        </div>";
        }else{
            document.getElementById("finishedListDiv").innerHTML += "<div id=\""+task['id']+"\" class=\"taskDiv\">\n" +
            "            <img class=\"checkIcon\" src=\"img/finished.png\" onclick=\"changeTaskStatement(this.parentNode)\" height=\"30\" width=\"30\">"+
            "            <div class=\"taskTextDiv\" onclick=\"openTask(this)\">\n" +
            "                <label class=\"checkTitle\" style=\"text-decoration: line-through; color: #9d9d9d\">" + task['title'] + "</label><br/>\n" +
            "                <label class=\"checkDdl\">ddl: " + task['date'] + "</label>\n" +
            "            </div>\n" +
            "            <img src=\"img/"+today+".png\" class=\"sun\" height=\"30\" width=\"30\" onclick=\"addToday(this.parentNode)\"/>"+
            "            <img src=\"img\/"+star+".png\" class=\"star\" height=\"30\" width=\"30\" onclick=\"addImportant(this.parentNode)\"/>"+
            "        </div>";
        }
        
    }
}

if(localStorage.all==null){
    localStorage.setItem("all",JSON.stringify(0));
}


function openTask(taskDiv) {
    localStorage.setItem("currentTaskID",JSON.stringify(taskDiv.parentNode.id));
    window.location.href = "editor.html";
}

function changeTaskStatement(taskDiv) {
    icon = taskDiv.firstElementChild;
    
    taskTitle = taskDiv.childNodes[3].childNodes[1];
    id = taskDiv.id;
    task = taskList[taskList.findIndex(item=>item['id']==id)];
    if (task['isFinished'] == false) {
        icon.src = 'img/finished.png';
        taskTitle.style.textDecoration = "line-through";
        uncplTaskNum--;
        cplTaskNum++;
        taskTitle.style.color = "#9d9d9d";
        document.getElementById("finishedListDiv").append(taskDiv);
        
        // change storage
        taskList[taskList.findIndex(item=>item.id==taskDiv.id)]['isFinished']=true;
    } else {
        icon.src = 'img/todo.png';
        uncplTaskNum++;
        cplTaskNum--;
        taskTitle.style.textDecoration = "none";
        taskTitle.style.color = "#000000";
        document.getElementById("unfinishedTaskListDiv").append(taskDiv);
        taskList[taskList.findIndex(item=>item.title==taskTitle.textContent)]['isFinished']=false;
    }
    localStorage.taskList=JSON.stringify(taskList);
}

// whether completedList is folded
var completedList = 0;

function showOrHideCompleted() {
    if (0 == completedList) {
        completedList = 1;
        document.getElementById("deleteBtn").style.display="none";
        document.getElementById("finishedListDiv").style.display = "none";
        document.getElementById("completeBtn").style.marginBottom = "3rem";
    } else {
        completedList = 0;
        document.getElementById("completeBtn").style.marginBottom = "0rem";
        document.getElementById("deleteBtn").style.display="";
        document.getElementById("finishedListDiv").style.display = "";
    }
}

function deleteAllFinishedTask(){
    taskList=JSON.parse(localStorage.getItem("taskList"));
    for(var i=1 ; i<taskList.length;){
        task = taskList[i];
        if(task["isFinished"]==true){
            taskList.splice(i,1);
        }else{
            i++;
        }
    }
    localStorage.setItem("taskList",JSON.stringify(taskList));
    location.reload();
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

    // add new element to the list
    document.getElementById("unfinishedTaskListDiv").innerHTML += "<div id=\""+task.id+"\" class=\"taskDiv\">\n" +
        "            <img class=\"checkIcon\" src=\"img/todo.png\" onclick=\"changeTaskStatement(this.parentNode)\" height=\"30\" width=\"30\">"+
        "            <div class=\"taskTextDiv\" onclick=\"openTask(this)\">\n" +
        "                <label class=\"checkTitle\">" + title + "</label><br/>\n" +
        "                <label class=\"checkDdl\">ddl: " + date + "</label>\n" +
        "            </div>\n" +
        "            <img src=\"img/sun.png\" class=\"sun\" height=\"30\" width=\"30\" onclick=\"addToday(this.parentNode)\"/>"+
        "            <img src=\"img/star.png\" class=\"star\" height=\"30\" width=\"30\" onclick=\"addImportant(this.parentNode)\"/>"+
        "        </div>";
    
    // clear the input box's value
    newTaskDiv.childNodes[3].value = "";
}


function addImportant(taskNode){
    // get task's title
    id = taskNode.id;

    // get statement
    star = taskList[taskList.findIndex(item=>item['id']==id)]['star']
    if(star==false){
        taskList[taskList.findIndex(item=>item['id']==id)]['star']=true;
        taskNode.childNodes[7].src='img/stared.png';
    }else{
        taskList[taskList.findIndex(item=>item['id']==id)]['star']=false;
        taskNode.childNodes[7].src='img/star.png';
    }
    // change localStorage
    localStorage.taskList=JSON.stringify(taskList);
}

function addToday(taskNode){
    // get task's title
    id = taskNode.id;

    // get statement
    today = taskList[taskList.findIndex(item=>item['id']==id)]['today']
    if(today==false){
        taskList[taskList.findIndex(item=>item['id']==id)]['today']=true;
        taskNode.childNodes[5].src='img/suned.png';
    }else{
        taskList[taskList.findIndex(item=>item['id']==id)]['today']=false;
        taskNode.childNodes[5].src='img/sun.png';
    }
    // change localStorage
    localStorage.taskList=JSON.stringify(taskList);
}

var starState=0;
function filtImportant(img){
    listDiv=document.getElementById('unfinishedTaskListDiv');
    listDiv.innerHTML="";
    // change icon
    if(starState==0){
        starState=1;
        img.src="img/stared.png";
        filt();
    }else{
        starState=0;
        img.src="img/star.png";
        filt();
    }
    
    
}

var todayState=0;
function filtToday(img){
    listDiv=document.getElementById('unfinishedTaskListDiv');
    listDiv.innerHTML="";
    // change icon
    if(todayState==0){
        todayState=1;
        img.src="img/suned.png";
        filt();
    }else{
        todayState=0;
        img.src="img/sun.png";
        filt();
    }
    
    
}

function filt(){
    flag=0;
    if(todayState==1){
        if(starState==1){
            flag = 1;
        }else{
            flag = 2;
        }
    }else{
        if(starState==1){
            flag = 3;
        }else{
            flag = 4;
        }
    }
    taskList = JSON.parse(localStorage.getItem('taskList'));
    listDiv=document.getElementById('unfinishedTaskListDiv');
    for(i=1;i<taskList.length;i++){
        task = taskList[i];
        if(match(task,flag)&&task["isFinished"]==false){
            star = 'star';
            today = 'sun';
            if(task['star']==true){
                star = 'stared';
            }
            if(task['today']==true){
                today = 'suned';
            }
            listDiv.innerHTML+="<div id=\""+task['id']+"\" class=\"taskDiv\">\n" +
            "            <img class=\"checkIcon\" src=\"img/todo.png\" onclick=\"changeTaskStatement(this.parentNode)\" height=\"30\" width=\"30\">"+
            "            <div class=\"taskTextDiv\" onclick=\"openTask(this)\">\n" +
            "                <label class=\"checkTitle\">" + task['title'] + "</label><br/>\n" +
            "                <label class=\"checkDdl\">ddl: " + task['date'] + "</label>\n" +
            "            </div>\n" +
            "            <img src=\"img/"+today+".png\" class=\"sun\" height=\"30\" width=\"30\" onclick=\"addToday(this.parentNode)\"/>"+
            "            <img src=\"img/"+star+".png\" class=\"star\" height=\"30\" width=\"30\" onclick=\"addImportant(this.parentNode)\"/>"+
            "        </div>";
        }
    }
}

function match(task,flag){
    switch(flag){
        case 1:
            if(task['today']==true&&task['star']==true){
                return true;
            }else{
                return false;
            }
        case 2:
            if(task['today']==true){
                return true;
            }else{
                return false;
            }
        case 3:
            if(task['star']==true){
                return true;
            }else{
                return false;
            }
        case 4:
            return true;
    }
}

function changeAll(img){
    allFinished = localStorage.getItem("all");
    taskList = JSON.parse(localStorage.getItem('taskList'));
    if(allFinished==0){
        img.src="img/finished.png";
        for(i=1;i<taskList.length;i++){
            taskList[i]['isFinished']=true;
        }
        localStorage.setItem("all",JSON.stringify(1));
    }else{
        allFinished=0;
        img.src="img/todo.png";
        for(i=1;i<taskList.length;i++){
            taskList[i]['isFinished']=false;
        }
        localStorage.setItem("all",JSON.stringify(0));
    }
    localStorage.setItem("taskList",JSON.stringify(taskList));
    location.reload();
}
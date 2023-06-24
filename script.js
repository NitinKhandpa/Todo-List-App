const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value == ""){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.setAttribute("title","Delete");
        li.appendChild(span);
        
        
    }
    inputBox.value="";
    saveData();
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName ==='SPAN'){
        if(confirm("Do you really want to delete this task?")){
        e.target.parentElement.remove();
        saveData();
        }
    }
});


function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

function showTask(){
listContainer.innerHTML=localStorage.getItem('data');
}

showTask();
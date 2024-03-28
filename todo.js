const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const button = document.querySelector('button');

function addTask() {
    if (inputBox.value === '') {
        alert("Write something");
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=inputBox.value;
        let span=document.createElement('span');
        span.innerHTML="\u00d7"
        li.appendChild(span);
        listContainer.appendChild(li);
       
    }
    inputBox.value=""
    saveData()
}

button.addEventListener('click', addTask);
listContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI')
    {
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName==='SPAN')
    {
        e.target.parentElement.remove();
        saveData()
    }
},false)
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showtask()
{
      listContainer.innerHTML=localStorage.getItem("data");
}
showtask();
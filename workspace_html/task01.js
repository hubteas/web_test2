let insertBtn = document.getElementById('insertBtn');
let insertTask = document.getElementById('checkbox');
let taskContainer = document.getElementById('task-container');

console.log(insertBtn);

insertBtn.addEventListener('click', ()=>{
  let innerTask = prompt("할일을 입력하세요");
  insertTask.innerText = innerTask;
  console.log(insertTask.innerText)
  if(insertTask.innerText!=''){
    taskContainer.setAttribute('display', 'block');
  }
})
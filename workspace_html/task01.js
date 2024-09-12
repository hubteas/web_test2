let insertBtn = document.getElementById('insertBtn');
let taskContainer = document.getElementById('task-container');
let todoList = document.getElementById('todolist');

console.log(insertBtn);

insertBtn.addEventListener('click', ()=>{
  let toDo = prompt("할일을 입력하세요");
  console.log(toDo);

  if(toDo!=''){
    taskContainer.style.display = 'block';
    const newLi = document.createElement('li');
		const newCheckbox = document.createElement('input');
    newCheckbox.type = "checkbox";
		const newBtn = document.createElement('button');
    newBtn.innerText = '삭제';
      
		newLi.appendChild(newCheckbox); // li안에 checkbox 담기
		newLi.appendChild(newBtn); // li안에 button 담기

		console.log(newLi);
    newCheckbox.textContent = toDo;

    todoList.appendChild(newLi);
    console.log(todoList);


  };
  
})
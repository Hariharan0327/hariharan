document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('taskList');

        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${taskText}</span> <button class="removeButton">Remove</button>`;
        
        taskList.appendChild(listItem);
        
        taskInput.value = '';

        listItem.querySelector('.removeButton').addEventListener('click', function() {
            taskList.removeChild(listItem);
        });
    }
});

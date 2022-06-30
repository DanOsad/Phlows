const newTaskBtn = document.querySelector('#newTaskBtn')
newTaskBtn.addEventListener('click', () => {
    let taskList = document.querySelectorAll('.taskInput')
    let div = document.createElement( 'div' )
    div.innerHTML = `
                    <label for="task1">Task:</label>
                    <input name="task1" id="task1" value="">
                    `
    div.classList.add('taskInput')
    div.setAttribute('id',`task${taskList.length+1}`)
    let parent = document.getElementById('tasks')
    parent.append(div)
    // taskList.append(div)
})
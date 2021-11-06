const list = {}

function changeStatus(name, status = 'To Do') {
  if (!(name in list)) {
    console.log(`Can't change status, ${name} not in List`)
  } else {
    switch (status) {
      case "To Do":
      case "In Progress":
      case "Done":
        list[name] = status
        break;
      default:
        console.log(status + " is unknown status! Try: To Do, In Progress, Done")
        break;
    }
  }

}

function addTask(name = 'task') {
  if (name in list) {
    console.log(`${name} - alredy in list`)
  } else if (!name) {
    console.log("It's bad name for new task, try again:)")
  } else {
    list[name] = "To Do"
  }
}

function deleteTask(name) {
  if (name in list) {
    delete list[name]
  } else {
    console.log(`Can't delete ${name}, not in list!`)
  }
}

function showList() {
  let toDoList = selectTasksByStatus('To Do')
  let inProgressList = selectTasksByStatus('In Progress')
  let doneList = selectTasksByStatus('Done')

  console.log(`TODO:\n${toDoList}In Progress:\n${inProgressList}Done:\n${doneList}`)
}

function selectTasksByStatus(status) {
  let newList = ''
  for (let key in list) {
    if (list[key] == status) { newList += `  "${key}"\n` }
  }
  if (!newList) { newList += '  -\n' }
  return newList
}

console.log('-------------------\nCatch some errors:\n')
addTask('someTask')
changeStatus('someTask', 'rofl')
changeStatus('lol', 'Done')
addTask('someTask')
addTask('')
deleteTask('someTask')
deleteTask('someTask')

console.log("--------------------\nLet's start!")
console.log('\nshow empty list\n')
showList()

console.log('add 3 tasks\n')
addTask("create a task")
addTask("make a bed")
addTask("write a post")
showList()

console.log('get 2 tasks in progress\n')
changeStatus("make a bed", "In Progress")
changeStatus("write a post", "In Progress")
showList()

console.log('*** Make a bed Done! ***\n')
changeStatus("make a bed", "Done")
showList()

console.log('*** Add wrong task ***\n')
addTask('Wrong task')
showList()

console.log("*** Let's delete worng task ***\n")
deleteTask('Wrong task')
showList()

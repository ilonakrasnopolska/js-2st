// Функция, возвращающая новую btn
function createBtn(text, className) {
  let btn = document.createElement('button')
  btn.textContent = text
  btn.classList.add(className)
  return btn
}

// Функция, возвращающая новый input
function createInput(placeholder, type, className) {
  let input = document.createElement('input')
  input.type = type
  input.placeholder = placeholder
  input.classList.add(className)
  return input
}

// Функция, создает список
function createList(item, className) {
  let list = document.createElement('ul')
  list.classList.add(className)
  list.append(item)
  return list
}

// Функция, создает заголовок
function createTitle(text, className) {
  let title = document.createElement('h1')
  title.textContent = text
  title.classList.add(className)
  return title
}

// Функция, создает элемент списка
function createItem(inputValue, className) {
  let item = document.createElement('li')
  item.classList.add(className)

  let title = createTitle(inputValue, "list__item-subtitle")

  let btnBox = document.createElement('div')
  btnBox.classList.add("list__item-btn-box")

  const btnDone = createBtn('Done', "list__item-btn")
  btnDone.classList.add("list__item-btn-done")

  const btnChange = createBtn('Edit', "list__item-btn")
  const btnDelete = createBtn('Delete', "list__item-btn")

  //Кнопка выполнено - функция чтобы пометить как выполненное
  btnDone.onclick = function () {
    btnDone.remove()
    btnChange.remove()
    btnDelete.classList.add("btn-remove")
    item.classList.add("list-done")
  }

  //Кнопка изменить - функция чтобы изменить h1
  btnChange.onclick = function () {
    let changeTarget = prompt('Enter the task name:')
    if (changeTarget !== null && changeTarget !== "") {
      title.textContent = changeTarget
    }
  }

  //Кнопка удалить - функция чтобы удалить list
  btnDelete.onclick = function () {
    item.remove()
  }

  btnBox.append(btnDone, btnChange, btnDelete)
  item.append(title, btnBox)
  return item
}


// контейнер 
const container = document.createElement('div')
container.classList.add("container")

//обертка для input и btn
const contentWrapper = document.createElement('div')
contentWrapper.classList.add("content-wrapper")

// input
const input = createInput("Task", "text", "input")

//контейнер для задач
const listBox = document.createElement('ul')
listBox.classList.add("list-container")


//Кнопка для создания задачи
const clickButton = createBtn("Create task", "create-btn")
clickButton.onclick = function () {

  if (input.value !== null && input.value !== "") {
    let listItem = createItem(input.value, "list-item")

    listBox.append(listItem)
    container.append(listBox)
  }
}

contentWrapper.append(input, clickButton)
container.append(contentWrapper)
document.body.append(container)

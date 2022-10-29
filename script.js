
const btnAdd = document.querySelector("[data-form-btn-add]")
console.log(btnAdd)

const createTask = (e) => {
	e.preventDefault()
	const inputTask = document.querySelector("[data-form-input-task]")
	const valueInput = inputTask.value
	inputTask.value = ""
	console.log(valueInput)
}

btnAdd.addEventListener("click", createTask)

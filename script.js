
const btnAdd = document.querySelector("[data-form-btn-add]")
console.log(btnAdd)

const createTask = (e) => {
	e.preventDefault()
	const inputTask = document.querySelector("[data-form-input-task]")
	console.log(inputTask.value)
}

btnAdd.addEventListener("click", createTask)

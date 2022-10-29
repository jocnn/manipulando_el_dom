
const btnAdd = document.querySelector("[data-form-btn-add]")
console.log(btnAdd)

const createTask = (e) => {
	e.preventDefault()
	const inputTask = document.querySelector("[data-form-input-task]")
	const valueInput = inputTask.value
	inputTask.value = ""
	const liTask = document.querySelector("[data-task]")
	const content = `
		<div>
			<i class="far fa-check-square icon"></i>
			<span class="task">${valueInput}</span>
		</div>
		<i class="fas fa-trash-alt trashIcon icon"></i>
	`
	liTask.innerHTML = content
	//console.log(valueInput)
	//console.log(liTask)
}

btnAdd.addEventListener("click", createTask)

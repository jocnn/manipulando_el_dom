
const btnAdd = document.querySelector("[data-form-btn-add]")
console.log(btnAdd)

btnAdd.addEventListener("click", function () {
	console.log("Crear tarea")
	const inputTask = document.querySelector("[data-form-input-task]")
	console.log(inputTask.value)
})

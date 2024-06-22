document.addEventListener("DOMContentLoaded", function () {
  const btnAdd = document.getElementById("btn-add");
  const btnEdit = document.getElementById("btn-edit");
  const btnDelete = document.getElementById("btn-delete");
  const formAdd = document.getElementById("form-add");
  const formEdit = document.getElementById("form-edit");
  const formDelete = document.getElementById("form-delete");
  const btnCancelEdit = document.getElementById("btn-cancel-edit");

  // Mostrar formulario para agregar película
  btnAdd.addEventListener("click", function () {
    formAdd.classList.remove("hide");
    formEdit.classList.add("hide");
    formDelete.classList.add("hide");
  });

  // Mostrar formulario para editar película
  btnEdit.addEventListener("click", function () {
    formAdd.classList.add("hide");
    formEdit.classList.remove("hide");
    formDelete.classList.add("hide");
  });

  // Mostrar formulario para eliminar película
  btnDelete.addEventListener("click", function () {
    formAdd.classList.add("hide");
    formEdit.classList.add("hide");
    formDelete.classList.remove("hide");
  });

  // Cancelar edición de película
  btnCancelEdit.addEventListener("click", function () {
    formEdit.classList.add("hide");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btnAdd = document.getElementById("btn-add");
  const btnEdit = document.getElementById("btn-edit");
  const btnDelete = document.getElementById("btn-delete");
  const formAdd = document.getElementById("form-add");
  const formEdit = document.getElementById("form-edit");
  const formDelete = document.getElementById("form-delete");
  const btnCancelEdit = document.getElementById("btn-cancel-edit");

  btnAdd.addEventListener("click", () => {
    formAdd.classList.remove("hide");
    formEdit.classList.add("hide");
    formDelete.classList.add("hide");
  });

  btnEdit.addEventListener("click", () => {
    formEdit.classList.remove("hide");
    formAdd.classList.add("hide");
    formDelete.classList.add("hide");
  });

  btnDelete.addEventListener("click", () => {
    formDelete.classList.remove("hide");
    formAdd.classList.add("hide");
    formEdit.classList.add("hide");
  });

  btnCancelEdit.addEventListener("click", () => {
    formEdit.classList.add("hide");
  });
});

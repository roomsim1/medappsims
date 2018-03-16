function addNewItem() {
  var listItem = document.createElement("li");
  listItem.innerText = "hello";

  var list = document.getElementById("todoList");
  list.appendChild(listItem);
}
var btnNew = document.getElementById("btnAdd");
btnNew.onclick = addNewItem;

//kif yenzel aal X tetfasa5 el item (display none)
var deleteElements = document.querySelectorAll(".delete");

deleteElements.forEach(function (deleteElement) {
  deleteElement.addEventListener("click", function () {
    var itemElement = deleteElement.parentNode;
    itemElement.style.display = "none";
  });
});
//kif yeclicki aal item it gets barred
function toggleClicked() {
  this.classList.toggle("clicked");
}

var itemElements = document.querySelectorAll(".item");
itemElements.forEach(function (itemElement) {
  itemElement.addEventListener("click", toggleClicked);
});
//inajem isaker el add menu
var closeElement = document.querySelector(".close");

var addMenuElement = document.querySelector(".add-menu");

closeElement.addEventListener("click", function () {
  addMenuElement.style.display = "none";
});
//i7el el add menu bel button
var showMenu = document.querySelector(".add-button");

var menu = document.querySelector(".add-menu");

showMenu.addEventListener("click", function () {
  menu.style.display = "flex";
});
//yaati action lel add and save button
document.getElementById("addSave").addEventListener("click", function () {
  const title = document.getElementById("todoTitle").value.trim();
  const details = document.getElementById("todoDetails").value;
  const deadline = document.getElementById("todoDeadline").value;

  // ya9ra el date mtaa lyoum
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // initialisation lel date mtaa lyoum bech icompariha bel deadline

  // ya9ra el deadline bech yaamalou comparaison bel date mtaa lyoum
  const enteredDate = new Date(deadline);
  enteredDate.setHours(0, 0, 0, 0);

  // el title lezem mawjoud
  if (title === "") {
    alert("Title is required.");
    return;
  }

  // lezem ya5tar future deadline
  if (deadline === "") {
    alert("Deadline is required.");
    return;
  } else if (enteredDate < currentDate) {
    alert("Please enter a future date for the deadline.");
    return;
  }
  //izid el item el jdida
  const listElement = document.querySelector(".list");
  const newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.innerHTML = `
    <div class="title">${title}</div>
    <div class="details">${details}</div>
    <div class="date">${deadline}</div>
    <div class="delete">X</div>
  `;
  //fazet el bar on click
  newItem.addEventListener("click", toggleClicked);
  //tetfasa5 kif yeclicki aal X kima el old items
  const deleteButton = newItem.querySelector(".delete");
  deleteButton.addEventListener("click", function () {
    newItem.remove();
  });

  listElement.appendChild(newItem);
  //kif yeclicki aal add and save button tetsaker el menu
  document.getElementById("addMenu").style.display = "none";

  // kif tzid item el inputs yarj3ou ferghin
  document.getElementById("todoTitle").value = "";
  document.getElementById("todoDetails").value = "";
  document.getElementById("todoDeadline").value = "";
});

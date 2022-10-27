"use strict";
// function to reset the modal when the user presses x or submits it
exports.__esModule = true;
function resetModal() {
    var title = document.querySelector("#title");
    var description = document.querySelector("#description");
    var date = document.querySelector("#date");
    var urgent = document.querySelector("#not-urgent");
    title.value = "";
    description.value = "";
    date.value = "";
    urgent.checked = true;
}
exports["default"] = resetModal;

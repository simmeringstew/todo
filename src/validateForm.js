"use strict";
// function to validate the create new project form
exports.__esModule = true;
function validateForm() {
    var title = document.querySelector("#title").value;
    var description = document.querySelector("#description").value;
    var date = document.querySelector("#date").value;
    var urgency = "";
    if (document.querySelector("#urgent").checked) {
        urgency = "urgent";
    }
    else {
        urgency = "not-urgent";
    }
    if (title === "") {
        return [];
    }
    else if (description === "") {
        return [];
    }
    else if (date === "") {
        return [];
    }
    else {
        return [title, description, date, urgency];
    }
}
exports["default"] = validateForm;

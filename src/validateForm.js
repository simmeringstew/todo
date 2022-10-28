"use strict";
exports.__esModule = true;
var isFuture_1 = require("date-fns/isFuture");
// function to validate the create new project form
function validateForm() {
    var errorCheck = 0;
    var title = document.querySelector("#title");
    var description = document.querySelector("#description");
    var date = document.querySelector("#date");
    var urgency = "";
    if (document.querySelector("#urgent").checked) {
        urgency = "urgent";
    }
    else {
        urgency = "not-urgent";
    }
    if (title.value === "") {
        title.classList.add("error");
        errorCheck++;
    }
    if (description.value === "") {
        description.classList.add("error");
        errorCheck++;
    }
    var result = (0, isFuture_1["default"])(new Date(date.value));
    if (date.value === "") {
        date.classList.add("error");
        errorCheck++;
    }
    else if (result === false) {
        date.classList.add("error");
        errorCheck++;
    }
    if (errorCheck !== 0) {
        return [];
    }
    else {
        return [title.value, description.value, date.value, urgency];
    }
}
exports["default"] = validateForm;

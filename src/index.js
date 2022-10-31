"use strict";
exports.__esModule = true;
exports.removeProject = void 0;
require("./meyer-reset.css");
require("./style.css");
var format_1 = require("date-fns/format");
var resetModal_1 = require("./resetModal");
var validateForm_1 = require("./validateForm");
var updateProjectCards_1 = require("./updateProjectCards");
// where the project objects will get stored after being created
var projects = [];
// project object class
var Project = /** @class */ (function () {
    function Project(title, description, date, urgency, todos) {
        if (title === void 0) { title = ""; }
        if (description === void 0) { description = ""; }
        if (date === void 0) { date = ""; }
        if (urgency === void 0) { urgency = ""; }
        if (todos === void 0) { todos = []; }
        this.title = title;
        this.description = description;
        this.date = (0, format_1["default"])(new Date(date), "do MMMM y");
        this.urgency = urgency;
        this.todos = todos;
    }
    Project.prototype.addTodo = function (newTodo) {
        this.todos.push(newTodo);
    };
    Project.prototype.removeTodo = function (index) {
        this.todos.splice(index, 1);
    };
    return Project;
}());
// selector for the create project button and modal
var modal = document.querySelector(".modal");
var closeModal = document.querySelector(".close-modal");
var createProjectButton = document.querySelector(".create-view");
createProjectButton.addEventListener("click", function () {
    modal.showModal();
    (0, resetModal_1["default"])();
});
closeModal.addEventListener("click", function () {
    modal.close();
    (0, resetModal_1["default"])();
});
modal.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        var projectData = (0, validateForm_1["default"])();
        if (projectData.length === 0) {
            return;
        }
        newProjectObject(projectData);
        modal.close();
    }
    else if (e.key === "Escape") {
        modal.close();
        (0, resetModal_1["default"])();
    }
});
// submit form button
var submit = document.querySelector(".submit");
submit.addEventListener("click", function () {
    var projectData = (0, validateForm_1["default"])();
    if (projectData.length === 0) {
        return;
    }
    newProjectObject(projectData);
    modal.close();
});
// function to create a project object
function newProjectObject(data) {
    var newProject = new Project(data[0], data[1], data[2], data[3]);
    projects.push(newProject);
    (0, updateProjectCards_1["default"])(projects);
}
// function to remove projects
function removeProject(index) {
    projects.splice(index, 1);
    (0, updateProjectCards_1["default"])(projects);
}
exports.removeProject = removeProject;

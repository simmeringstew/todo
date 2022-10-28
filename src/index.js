"use strict";
exports.__esModule = true;
exports.showProject = exports.removeProject = void 0;
require("./meyer-reset.css");
require("./style.css");
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
        this.date = date;
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
// function to show current project
function showProject(index) {
    var activeArea = document.querySelector(".active-project");
    var projectArea = document.querySelector(".projects");
    var breakLineOne = document.createElement("hr");
    var breakLineTwo = document.createElement("hr");
    var activeCard = document.createElement("div");
    activeCard.classList.add("active-card");
    activeCard.classList.add(projects[index].urgency);
    var title = document.createElement("h2");
    title.classList.add("active-title");
    title.textContent = projects[index].title;
    var date = document.createElement("p");
    date.classList.add("active-date");
    date.textContent = "Due Date: ".concat(projects[index].date);
    var description = document.createElement("p");
    description.classList.add("active-description");
    description.textContent = projects[index].description;
    var allTodos = [];
    for (var i = 0; i < projects[index].todos.length; i++) {
        var todoArea = document.createElement("div");
        todoArea.classList.add("todo");
        todoArea.setAttribute("data-target", "".concat(i));
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.setAttribute("data-target", "".concat(i));
        var todoText = document.createElement("p");
        todoText.classList.add("todo-text");
        todoText.textContent = projects[index].todos[i];
        todoArea.appendChild(checkBox);
        todoArea.appendChild(todoText);
        allTodos.push(todoArea);
    }
    var newTodo = document.createElement("input");
    newTodo.classList.add("new-todo");
    newTodo.id = "new-todo";
    newTodo.name = "new-todo";
    newTodo.maxLength = 20;
    newTodo.placeholder = "Press enter to add";
    var completeButton = document.createElement("button");
    completeButton.classList.add("complete-active");
    completeButton.textContent = "Complete Project!";
    completeButton.setAttribute("data-target", "".concat(index));
    projectArea.innerHTML = "";
    activeCard.appendChild(title);
    activeCard.appendChild(date);
    activeCard.appendChild(breakLineOne);
    activeCard.appendChild(description);
    activeCard.appendChild(breakLineTwo);
    for (var i = 0; i < allTodos.length; i++) {
        activeCard.appendChild(allTodos[i]);
    }
    activeCard.appendChild(newTodo);
    activeCard.appendChild(completeButton);
    activeArea.appendChild(activeCard);
}
exports.showProject = showProject;
// testing stuff
var newProject = new Project("Test", "Here is a test of a project card", "2023-05-16", "urgent");
var newProject2 = new Project("Antother Test", "Blah", "2022-11-08", "not-urgent");
projects.push(newProject);
projects.push(newProject2);
projects[1].addTodo("See if this works");
(0, updateProjectCards_1["default"])(projects);

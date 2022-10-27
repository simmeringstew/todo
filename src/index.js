"use strict";
exports.__esModule = true;
require("./meyer-reset.css");
require("./style.css");
var resetModal_1 = require("./resetModal");
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
createProjectButton === null || createProjectButton === void 0 ? void 0 : createProjectButton.addEventListener("click", function () {
    modal === null || modal === void 0 ? void 0 : modal.showModal();
    (0, resetModal_1["default"])();
});
closeModal === null || closeModal === void 0 ? void 0 : closeModal.addEventListener("click", function () {
    modal === null || modal === void 0 ? void 0 : modal.close();
    (0, resetModal_1["default"])();
});
// testing stuff
var newProject = new Project("Test", "Here is a test of a project card", "2023-05-16", "urgent");
projects.push(newProject);
updateProjectCardsArea(projects);
function updateProjectCardsArea(projects) {
    var projectArea = document.querySelector(".projects");
    for (var i = 0; i < projects.length; i++) {
        var card = document.createElement("div");
        card.setAttribute("data-target", "".concat(i));
        card.classList.add("project-card");
        card.classList.add("".concat(projects[i].urgency));
        var title = document.createElement("h2");
        title.classList.add("project-title");
        title.textContent = projects[i].title;
        var description = document.createElement("p");
        description.classList.add("project-description");
        description.textContent = projects[i].description;
        var closeButton = document.createElement("div");
        closeButton.classList.add("material-symbols-outlined");
        closeButton.classList.add("close");
        closeButton.textContent = "close";
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(closeButton);
        projectArea === null || projectArea === void 0 ? void 0 : projectArea.appendChild(card);
    }
}

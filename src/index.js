"use strict";
exports.__esModule = true;
require("./meyer-reset.css");
require("./style.css");
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
var newProject = new Project("Test", "Here is a test of a project card", "2023-05-16", "urgent");
projects.push(newProject);
projects[0].addTodo("This has been added");
console.log(projects[0]);

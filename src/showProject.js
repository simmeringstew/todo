"use strict";
exports.__esModule = true;
var updateProjectCards_1 = require("./updateProjectCards");
var index_1 = require("./index");
// function to show a the project that the user clicks on
function showProject(index, projects) {
    var activeArea = document.querySelector(".active-project");
    var projectArea = document.querySelector(".projects");
    var breakLineOne = document.createElement("hr");
    var breakLineTwo = document.createElement("hr");
    var activeCard = document.createElement("div");
    activeCard.classList.add("active-card");
    activeCard.classList.add(projects[index].urgency);
    var titleArea = document.createElement("div");
    titleArea.classList.add("active-title-area");
    var backButton = document.createElement("span");
    backButton.classList.add("material-symbols-outlined");
    backButton.classList.add("back");
    backButton.textContent = "redo";
    backButton.addEventListener("click", function () {
        (0, updateProjectCards_1["default"])(projects);
    });
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
    var _loop_1 = function (i) {
        var todoArea = document.createElement("div");
        todoArea.classList.add("todo");
        todoArea.setAttribute("data-target", "".concat(i));
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.setAttribute("data-target", "".concat(i));
        checkBox.addEventListener("change", function () {
            projects[index].removeTodo(checkBox.getAttribute("data-target"));
            activeArea.innerHTML = "";
            showProject(index, projects);
        });
        var todoText = document.createElement("p");
        todoText.classList.add("todo-text");
        todoText.textContent = projects[index].todos[i];
        todoArea.appendChild(checkBox);
        todoArea.appendChild(todoText);
        allTodos.push(todoArea);
    };
    for (var i = 0; i < projects[index].todos.length; i++) {
        _loop_1(i);
    }
    var newTodoArea = document.createElement("div");
    newTodoArea.classList.add("active-new-todo-area");
    var newTodo = document.createElement("input");
    newTodo.classList.add("new-todo");
    newTodo.id = "new-todo";
    newTodo.name = "new-todo";
    newTodo.maxLength = 20;
    newTodo.placeholder = "New todo here";
    newTodo.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && newTodo.value !== "") {
            projects[index].addTodo(newTodo.value);
            activeArea.innerHTML = "";
            showProject(index, projects);
        }
    });
    var addTodoButton = document.createElement("button");
    addTodoButton.classList.add("active-add");
    addTodoButton.textContent = "Add";
    addTodoButton.addEventListener("click", function () {
        if (newTodo.value !== "") {
            projects[index].addTodo(newTodo.value);
            activeArea.innerHTML = "";
            showProject(index, projects);
        }
    });
    var completeButton = document.createElement("button");
    completeButton.classList.add("complete-active");
    completeButton.textContent = "Complete Project!";
    completeButton.setAttribute("data-target", "".concat(index));
    completeButton.addEventListener("click", function () {
        (0, index_1.removeProject)(completeButton.getAttribute("data-target"));
    });
    projectArea.innerHTML = "";
    titleArea.appendChild(title);
    titleArea.appendChild(backButton);
    newTodoArea.appendChild(newTodo);
    newTodoArea.appendChild(addTodoButton);
    activeCard.appendChild(titleArea);
    activeCard.appendChild(date);
    activeCard.appendChild(breakLineOne);
    activeCard.appendChild(description);
    activeCard.appendChild(breakLineTwo);
    for (var i = 0; i < allTodos.length; i++) {
        activeCard.appendChild(allTodos[i]);
    }
    activeCard.appendChild(newTodoArea);
    activeCard.appendChild(completeButton);
    activeArea.appendChild(activeCard);
}
exports["default"] = showProject;

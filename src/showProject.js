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
    completeButton.addEventListener("click", function () {
        (0, index_1.removeProject)(completeButton.getAttribute("data-target"));
    });
    projectArea.innerHTML = "";
    titleArea.appendChild(title);
    titleArea.appendChild(backButton);
    activeCard.appendChild(titleArea);
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
exports["default"] = showProject;

"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var showProject_1 = require("./showProject");
// function to update the projects card area
function updateProjectCardsArea(projects) {
    var projectArea = document.querySelector(".projects");
    var activeArea = document.querySelector(".active-project");
    projectArea.innerHTML = "";
    activeArea.innerHTML = "";
    var _loop_1 = function (i) {
        var card = document.createElement("div");
        card.setAttribute("data-target", "".concat(i));
        card.classList.add("project-card");
        card.classList.add("".concat(projects[i].urgency));
        card.addEventListener("click", function () {
            (0, showProject_1["default"])(card.getAttribute("data-target"), projects);
        });
        var title = document.createElement("h2");
        title.classList.add("project-title");
        title.textContent = projects[i].title;
        var description = document.createElement("p");
        description.classList.add("project-description");
        description.textContent = projects[i].description;
        var closeButton = document.createElement("span");
        closeButton.classList.add("material-symbols-outlined");
        closeButton.classList.add("close");
        closeButton.setAttribute("data-target", "".concat(i));
        closeButton.textContent = "close";
        closeButton.addEventListener("click", function (e) {
            e.stopPropagation();
            (0, index_1.removeProject)(closeButton.getAttribute("data-target"));
        });
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(closeButton);
        projectArea.appendChild(card);
    };
    for (var i = 0; i < projects.length; i++) {
        _loop_1(i);
    }
}
exports["default"] = updateProjectCardsArea;

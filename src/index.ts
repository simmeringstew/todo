import "./meyer-reset.css";
import "./style.css";
import format from "date-fns/format";
import resetModal from "./resetModal";
import validateForm from "./validateForm";
import updateProjectCardsArea from "./updateProjectCards";

// where the project objects will get stored after being created
let projects: any = [];

// project object class
class Project {
    title: string;
    description: string;
    date: string;
    urgency: string;
    todos: string[];

    constructor(title = "", description = "", date = "", urgency = "", todos = []) {
        this.title = title;
        this.description = description;
        this.date = format(new Date(date), "do MMMM y");
        this.urgency = urgency;
        this.todos = todos;
    }

    addTodo(newTodo: string): void {
        this.todos.push(newTodo);
    }
    removeTodo(index: number): void {
        this.todos.splice(index, 1);
    }
}

// selector for the create project button and modal
const modal = document.querySelector(".modal") as HTMLDialogElement;
const closeModal = document.querySelector(".close-modal") as HTMLDivElement;
const createProjectButton = document.querySelector(".create-view") as HTMLButtonElement;
createProjectButton.addEventListener("click", () => {
    modal.showModal();
    resetModal();
});
closeModal.addEventListener("click", () => {
    modal.close();
    resetModal();
});
modal.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const projectData: any = validateForm();
        if (projectData.length === 0) {
            return;
        }
        newProjectObject(projectData);
        modal.close();
    }
    else if (e.key === "Escape") {
        modal.close();
        resetModal();
    }
});

// submit form button
const submit = document.querySelector(".submit") as HTMLButtonElement;
submit.addEventListener("click", () => {
    const projectData: any = validateForm();
    if (projectData.length === 0) {
        return;
    }
    newProjectObject(projectData);
    modal.close();
})

// function to create a project object
function newProjectObject(data: any): void {
    let newProject = new Project(data[0], data[1], data[2], data[3]);
    projects.push(newProject);
    updateProjectCardsArea(projects);
}

// function to remove projects
export function removeProject(index: any): void {
    projects.splice(index, 1);
    updateProjectCardsArea(projects);
}

// function to show current project
export function showProject(index: any): void {
    const activeArea = document.querySelector(".active-project") as HTMLDivElement;
    const projectArea = document.querySelector(".projects") as HTMLDivElement;
    
    const breakLineOne = document.createElement("hr") as HTMLHRElement;
    const breakLineTwo = document.createElement("hr") as HTMLHRElement;

    const activeCard = document.createElement("div") as HTMLDivElement;
    activeCard.classList.add("active-card");
    activeCard.classList.add(projects[index].urgency);

    const titleArea = document.createElement("div") as HTMLDivElement;
    titleArea.classList.add("active-title-area");

    const backButton = document.createElement("span") as HTMLSpanElement;
    backButton.classList.add("material-symbols-outlined");
    backButton.classList.add("back");
    backButton.textContent = "redo";

    const title = document.createElement("h2") as HTMLHeadingElement;
    title.classList.add("active-title");
    title.textContent = projects[index].title;

    const date = document.createElement("p") as HTMLParagraphElement;
    date.classList.add("active-date");
    date.textContent = `Due Date: ${projects[index].date}`;

    const description = document.createElement("p") as HTMLParagraphElement;
    description.classList.add("active-description");
    description.textContent = projects[index].description;

    let allTodos: any[] = [];
    for (let i = 0; i < projects[index].todos.length; i++) {
        const todoArea = document.createElement("div") as HTMLDivElement;
        todoArea.classList.add("todo");
        todoArea.setAttribute("data-target", `${i}`);
        const checkBox = document.createElement("input") as HTMLInputElement;
        checkBox.type = "checkbox";
        checkBox.setAttribute("data-target", `${i}`);
        const todoText = document.createElement("p") as HTMLParagraphElement;
        todoText.classList.add("todo-text");
        todoText.textContent = projects[index].todos[i];
        todoArea.appendChild(checkBox);
        todoArea.appendChild(todoText);
        allTodos.push(todoArea);
    }

    const newTodo = document.createElement("input") as HTMLInputElement;
    newTodo.classList.add("new-todo");
    newTodo.id = "new-todo";
    newTodo.name = "new-todo";
    newTodo.maxLength = 20;
    newTodo.placeholder = "Press enter to add";

    const completeButton = document.createElement("button") as HTMLButtonElement;
    completeButton.classList.add("complete-active");
    completeButton.textContent = "Complete Project!";
    completeButton.setAttribute("data-target", `${index}`);

    projectArea.innerHTML = "";

    titleArea.appendChild(title);
    titleArea.appendChild(backButton);

    activeCard.appendChild(titleArea);
    activeCard.appendChild(date);
    activeCard.appendChild(breakLineOne);
    activeCard.appendChild(description);
    activeCard.appendChild(breakLineTwo);
    for (let i = 0; i < allTodos.length; i++) {
        activeCard.appendChild(allTodos[i]);
    }
    activeCard.appendChild(newTodo);
    activeCard.appendChild(completeButton);

    activeArea.appendChild(activeCard);

}


// testing stuff
let newProject = new Project("Test", "Here is a test of a project card", "2023-05-16", "urgent");
let newProject2 = new Project("Antother Test", "Blah", "2022-11-08", "not-urgent");
projects.push(newProject);
projects.push(newProject2);
projects[1].addTodo("See if this works");
updateProjectCardsArea(projects);
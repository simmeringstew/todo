import "./meyer-reset.css";
import "./style.css";
import resetModal from "./resetModal";
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
        this.date = date;
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
        // add here the ability to validate the form
    }
    else if (e.key === "Escape") {
        modal.close();
        resetModal();
    }
});

// function to remove projects
export default function removeProject(index: any): void {
    projects.splice(index, 1);
    updateProjectCardsArea(projects);
}

// testing stuff
let newProject = new Project("Test", "Here is a test of a project card", "2023-05-16", "urgent");
let newProject2 = new Project("Antother Test", "Blah", "2022-11-08", "not-urgent");
projects.push(newProject);
projects.push(newProject2);
updateProjectCardsArea(projects);
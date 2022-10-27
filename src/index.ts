import "./meyer-reset.css";
import "./style.css";

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
const modal = document.querySelector(".modal") as HTMLDialogElement | null;
const closeModal = document.querySelector(".close-modal") as HTMLDivElement | null;
const createProjectButton = document.querySelector(".create-view") as HTMLButtonElement | null;
createProjectButton?.addEventListener("click", () => {
    modal?.showModal();
});
closeModal?.addEventListener("click", () => {
    modal?.close();
});


// testing stuff
let newProject = new Project("Test", "Here is a test of a project card", "2023-05-16", "urgent");
projects.push(newProject);

updateProjectCardsArea(projects);

function updateProjectCardsArea(projects: any[]): void {
    const projectArea = document.querySelector(".projects") as HTMLDivElement | null;
    for (let i = 0; i < projects.length; i++) {
        const card = document.createElement("div") as HTMLDivElement;
        card.setAttribute("data-target", `${i}`);
        card.classList.add("project-card");
        card.classList.add(`${projects[i].urgency}`);
        const title = document.createElement("h2") as HTMLHeadingElement;
        title.classList.add("project-title");
        title.textContent = projects[i].title;
        const description = document.createElement("p") as HTMLParagraphElement;
        description.classList.add("project-description");
        description.textContent = projects[i].description;
        const closeButton = document.createElement("div") as HTMLDivElement;
        closeButton.classList.add("material-symbols-outlined");
        closeButton.classList.add("close");
        closeButton.textContent = "close";
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(closeButton);
        projectArea?.appendChild(card);
    }
}
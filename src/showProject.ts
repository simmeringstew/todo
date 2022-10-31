import updateProjectCardsArea from "./updateProjectCards";
import { removeProject } from "./index";

// function to show a the project that the user clicks on

export default function showProject(index: any, projects: any[]): void {
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
    backButton.addEventListener("click", () => {
        updateProjectCardsArea(projects);
    });

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

    const newTodoArea = document.createElement("div") as HTMLDivElement;
    newTodoArea.classList.add("active-new-todo-area");

    const newTodo = document.createElement("input") as HTMLInputElement;
    newTodo.classList.add("new-todo");
    newTodo.id = "new-todo";
    newTodo.name = "new-todo";
    newTodo.maxLength = 20;
    newTodo.placeholder = "New todo here";
    newTodo.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && newTodo.value !== "") {
            projects[index].addTodo(newTodo.value);
            activeArea.innerHTML = "";
            showProject(index, projects);
        }
    });

    const addTodoButton = document.createElement("button") as HTMLButtonElement;
    addTodoButton.classList.add("active-add");
    addTodoButton.textContent = "Add";
    addTodoButton.addEventListener("click", () => {
        if (newTodo.value !== "") {
            projects[index].addTodo(newTodo.value);
            activeArea.innerHTML = "";
            showProject(index, projects);
        }
    });

    const completeButton = document.createElement("button") as HTMLButtonElement;
    completeButton.classList.add("complete-active");
    completeButton.textContent = "Complete Project!";
    completeButton.setAttribute("data-target", `${index}`);
    completeButton.addEventListener("click", () => {
        removeProject(completeButton.getAttribute("data-target"));
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
    for (let i = 0; i < allTodos.length; i++) {
        activeCard.appendChild(allTodos[i]);
    }
    activeCard.appendChild(newTodoArea);
    activeCard.appendChild(completeButton);

    activeArea.appendChild(activeCard);

}
import { removeProject } from "./index";
import showProject from "./showProject";

// function to update the projects card area
export default function updateProjectCardsArea(projects: any[]): void {
    const projectArea = document.querySelector(".projects") as HTMLDivElement;
    const activeArea = document.querySelector(".active-project") as HTMLDivElement;

    projectArea.innerHTML = "";
    activeArea.innerHTML = "";

    for (let i = 0; i < projects.length; i++) {
        const card = document.createElement("div") as HTMLDivElement;
        card.setAttribute("data-target", `${i}`);
        card.classList.add("project-card");
        card.classList.add(`${projects[i].urgency}`);
        card.addEventListener("click", () => {
            showProject(card.getAttribute("data-target"), projects);
        })
        const title = document.createElement("h2") as HTMLHeadingElement;
        title.classList.add("project-title");
        title.textContent = projects[i].title;
        const description = document.createElement("p") as HTMLParagraphElement;
        description.classList.add("project-description");
        description.textContent = projects[i].description;
        const closeButton = document.createElement("span") as HTMLSpanElement;
        closeButton.classList.add("material-symbols-outlined");
        closeButton.classList.add("close");
        closeButton.setAttribute("data-target", `${i}`);
        closeButton.textContent = "close";
        closeButton.addEventListener("click", (e) => {
            e.stopPropagation();
            removeProject(closeButton.getAttribute("data-target"));
        });
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(closeButton);
        projectArea.appendChild(card);
    }
}
// function to reset the modal when the user presses x or submits it

export default function resetModal(): void {
    const title = document.querySelector("#title") as HTMLInputElement;
    const description = document.querySelector("#description") as HTMLInputElement;
    const date = document.querySelector("#date") as HTMLInputElement;
    const urgent = document.querySelector("#not-urgent") as HTMLInputElement;

    title.value = "";
    title.classList.remove("error");
    description.value = "";
    description.classList.remove("error");
    date.value = "";
    date.classList.remove("error");
    urgent.checked = true;
}
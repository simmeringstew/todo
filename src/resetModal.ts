// function to reset the modal when the user presses x or submits it

export default function resetModal(): void {
    const title = document.querySelector("#title") as HTMLInputElement;
    const description = document.querySelector("#description") as HTMLInputElement;
    const date = document.querySelector("#date") as HTMLInputElement;
    const urgent = document.querySelector("#not-urgent") as HTMLInputElement;

    title.value = "";
    description.value = "";
    date.value = "";
    urgent.checked = true;
}
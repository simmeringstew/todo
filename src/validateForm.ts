// function to validate the create new project form

export default function validateForm(): any {
    const title = document.querySelector<HTMLInputElement>("#title")!.value;
    const description = document.querySelector<HTMLInputElement>("#description")!.value;
    const date = document.querySelector<HTMLInputElement>("#date")!.value;
    let urgency: string = "";
    if (document.querySelector<HTMLInputElement>("#urgent")!.checked) {
        urgency = "urgent";
    }
    else {
        urgency = "not-urgent";
    }
    console.log(urgency);

    if (title === "") {
        return [];
    }
    else if (description === "") {
        return [];
    }
    else if (date === "") {
        return [];
    }
    else {
        return ["Hello"];
    }
}
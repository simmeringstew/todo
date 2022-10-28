import isFuture from "date-fns/isFuture";

// function to validate the create new project form

export default function validateForm(): any {
    let errorCheck: number = 0;
    const title = document.querySelector<HTMLInputElement>("#title")!;
    const description = document.querySelector<HTMLInputElement>("#description")!;
    const date = document.querySelector<HTMLInputElement>("#date")!;
    
    let urgency: string = "";
    if (document.querySelector<HTMLInputElement>("#urgent")!.checked) {
        urgency = "urgent";
    }
    else {
        urgency = "not-urgent";
    }

    if (title.value === "") {
        title.classList.add("error");
        errorCheck++;
    }
    if (description.value === "") {
        description.classList.add("error");
        errorCheck++;
    }

    const result: boolean = isFuture(new Date(date.value));
    if (date.value === "") {
        date.classList.add("error");
        errorCheck++;
    }
    else if (result === false) {
        date.classList.add("error");
        errorCheck++;
    }

    if (errorCheck !== 0) {
        return [];
    }
    else {
        return [title.value, description.value, date.value, urgency];
    }
}
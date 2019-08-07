import { AbstractControl } from "@angular/forms";

export const lowerCaseValidator = (control: AbstractControl) => {
    const valueInput = control.value as string;
    console.log(valueInput);
    console.log(valueInput.trim() && !/^[a-z0-9_\-]+$/.test(valueInput));

    if (valueInput.trim() && !/^[a-z0-9_\-]+$/.test(valueInput))
        return { lowercase: true };

    return null;
};
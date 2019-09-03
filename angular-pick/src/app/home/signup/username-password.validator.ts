import { ValidatorFn, FormGroup } from "@angular/forms";

export const userNamePassword: ValidatorFn = (formGroup: FormGroup) => {
    const username = formGroup.get('userName').value;
    const password = formGroup.get('password').value;

    if (username.trim() + password.trim())
        return username == password ? { usernamepassword: true } : null;
    else
        return null;
}

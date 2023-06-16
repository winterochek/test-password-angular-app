import { FormGroup } from "@angular/forms";
import { Complexity } from "../types";

export function validatePass(form: FormGroup): Complexity {
    const passwordControl = form.get('password');
    const isInvalid = passwordControl?.invalid
    const password = passwordControl?.value;

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(password);

    if (!password.length) {
        return null
    }

    if (isInvalid) {
        return 'invalid'
    }

    if (hasLetters && hasDigits && hasSymbols) {
        return 'strong'
    }

    if ((hasLetters && hasDigits) ||
        (hasLetters && hasSymbols) ||
        (hasDigits && hasSymbols)) {
        return 'medium'
    }

    return 'easy'
}
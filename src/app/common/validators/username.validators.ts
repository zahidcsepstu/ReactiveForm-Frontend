import { AbstractControl, ValidationErrors } from "@angular/forms";

export class usernamevalidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if (control.value && (control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true }
        }

        return null
    }
}
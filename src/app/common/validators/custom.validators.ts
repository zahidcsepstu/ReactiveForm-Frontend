import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if (control.value && (control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true }
        }

        return null
    }

    static shouldContainAt(control: AbstractControl): ValidationErrors | null {
        if (control.value && (control.value as string).indexOf('@') == -1) {
            return { shouldContainAt: true }
        }

        return null
    }
}
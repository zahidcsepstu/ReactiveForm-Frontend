
import { EmployeeService } from './../services/employee.service';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, timer } from 'rxjs';


export class CustomValidators {


    // private static employeeService = new EmployeeService();

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

export function shouldBeUnique(service: EmployeeService, id: number): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                service.getEmployeeEmail(id).subscribe(
                    (response: String[]) => {
                        if (response.includes(control.value))
                            resolve({ shouldBeUnique: true })
                        else
                            resolve(null)

                    },
                    (error: any) => {
                        reject(null)
                    }
                );
            }, 2000);


        });
    };
}
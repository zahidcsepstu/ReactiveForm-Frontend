import { usernamevalidators } from './../common/validators/username.validators';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-signup-form',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
    constructor(private employeeService: EmployeeService) {

    }
    controls = {
        name: new FormControl(),
        jobTitle: new FormControl(),
        email: new FormControl('', [
            Validators.required, //validators.required = static fn
            Validators.minLength(3),
            usernamevalidators.cannotContainSpace
        ]),
        phone: new FormControl(),
        // user name is type abstractControl
        imageUrl: new FormControl()
    }
    form = new FormGroup(this.controls)

    get username() {
        return this.form.get('username')
    };
    get email() {
        return this.form.get('email')
    }

    get f() {
        return this.form
    }

    submit(form: FormGroup) {

        this.employeeService.addEmployee(form.value).subscribe(
            (response: Employee) => {
                console.log(response);
                form.reset();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
                form.reset();
            }
        );
    }
}

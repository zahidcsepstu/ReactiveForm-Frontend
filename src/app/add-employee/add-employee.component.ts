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
        name: new FormControl('',
            [
                Validators.minLength(3),
                Validators.required, //validators.required = static fn
            ]
        ),
        jobTitle: new FormControl('',
            [
                Validators.required,
            ]
        ),
        email: new FormControl('',
            [
                Validators.required,
                usernamevalidators.cannotContainSpace,
                usernamevalidators.shouldContainAt
            ]
        ),
        phone: new FormControl('',
            [
                Validators.required,
                Validators.maxLength(11),
                Validators.minLength(11),
                usernamevalidators.cannotContainSpace
            ]
        ),

        imageUrl: new FormControl('',
            [
                Validators.required,
                usernamevalidators.cannotContainSpace
            ]
        )
    }
    form = new FormGroup(this.controls)

    get name() {
        return this.form.get('name')
    };
    get jobTitle() {
        return this.form.get('jobTitle')
    };
    get email() {
        return this.form.get('email')
    }
    get phone() {
        return this.form.get('phone')
    }
    get imageUrl() {
        return this.form.get('imageUrl')
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

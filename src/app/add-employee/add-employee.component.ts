import { usernamevalidators } from './../common/validators/username.validators';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
    selector: 'app-signup-form',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
    controls = {
        name: new FormControl(),
        jobTitle: new FormControl(),
        email: new FormControl('', [
            Validators.required, //validators.required = static fn
            Validators.minLength(3),
            usernamevalidators.cannotContainSpace
        ]),
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
}

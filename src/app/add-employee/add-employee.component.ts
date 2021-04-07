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
        username: new FormControl('', [
            Validators.required, //validators.required = static fn
            Validators.minLength(3),
            usernamevalidators.cannotContainSpace
        ]),
        // user name is type abstractControl
        password: new FormControl()
    }
    form = new FormGroup(this.controls)

    get username() {
        return this.form.get('username')
    }
}

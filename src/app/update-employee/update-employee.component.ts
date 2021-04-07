import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { usernamevalidators } from '../common/validators/username.validators';

@Component({
    selector: 'app-dialog',
    templateUrl: './update-employee.component.html',
    styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

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

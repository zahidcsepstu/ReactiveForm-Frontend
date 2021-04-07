import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms'
import { usernamevalidators } from '../app/common/validators/username.validators';

@Component({
    selector: 'app-signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
    controls = {
        username: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            usernamevalidators.cannotContainSpace
        ]),  // user name is type abstractControl validators.required = static fn
        password: new FormControl()
    }
    form = new FormGroup(this.controls)

    get username() {
        return this.form.get('username')
    }
}

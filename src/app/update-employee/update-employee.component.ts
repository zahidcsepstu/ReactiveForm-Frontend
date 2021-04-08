import { Employee } from './../employee';
import { Component, Inject, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { usernamevalidators } from '../common/validators/username.validators';

@Component({
    selector: 'app-dialog',
    templateUrl: './update-employee.component.html',
    styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {


    constructor(public dialogRef: MatDialogRef<UpdateEmployeeComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
    public employee: any;

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit(): void {
        this.employee = { ...this.data['employee'] };
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

}

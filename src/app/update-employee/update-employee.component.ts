
import { Component, Inject, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomValidators } from '../common/validators/custom.validators';

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
                CustomValidators.cannotContainSpace,
                CustomValidators.shouldContainAt
            ]
        ),
        phone: new FormControl('',
            [
                Validators.required,
                Validators.maxLength(11),
                Validators.minLength(11),
                CustomValidators.cannotContainSpace
            ]
        ),

        imageUrl: new FormControl('',
            [
                Validators.required,
                CustomValidators.cannotContainSpace
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

}

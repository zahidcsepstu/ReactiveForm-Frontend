import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

    contactMethods = [
        {
            id: 1,
            name: "phone"
        },
        {
            id: 2,
            name: "email"
        }
    ]

    vehicles = [
        {
            id: 1,
            name: "Car"
        },
        {
            id: 2,
            name: "Cycle"
        }
    ]



    log(x: any) {
        console.log(x)
    }

    submit(f: NgForm) {
        console.log(f)
    }
}

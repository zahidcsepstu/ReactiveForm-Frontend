import { MatDialog } from '@angular/material/dialog';
import { UpdateEmployeeComponent } from './../update-employee/update-employee.component';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

    ngOnInit(): void {
    }

    openDialog() {
        const dialogRef = this.dialog.open(UpdateEmployeeComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}

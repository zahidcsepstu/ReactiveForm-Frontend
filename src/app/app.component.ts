import { MatDialog } from '@angular/material/dialog';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'test';

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

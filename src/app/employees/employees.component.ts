import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

    title(title: any) {
        throw new Error('Method not implemented.');
    }
    public employees: Employee[] = [];
    public editEmployee!: Employee;
    public deleteEmployee!: Employee;

    constructor(private employeeService: EmployeeService, private dialog: MatDialog) { }

    ngOnInit() {
        this.getEmployees();
    }
    updateEmployee(employee: Employee) {

        console.log(employee)
        const dialogRef = this.dialog.open(UpdateEmployeeComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    public getEmployees(): void {
        this.employeeService.getEmployees().subscribe(
            (response: Employee[]) => {
                this.employees = response;
                console.log(this.employees);
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }



    public onUpdateEmloyee(employee: Employee): void {
        this.employeeService.updateEmployee(employee).subscribe(
            (response: Employee) => {
                console.log(response);
                this.getEmployees();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    public onDeleteEmloyee(employeeId: number): void {
        this.employeeService.deleteEmployee(employeeId).subscribe(
            (response: void) => {
                console.log(response);
                this.getEmployees();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

}

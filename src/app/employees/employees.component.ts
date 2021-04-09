import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../common/services/employee.service';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
    public employees!: Employee[];


    constructor(private employeeService: EmployeeService, private dialog: MatDialog, private toastr: ToastrService) { }

    ngOnInit() {
        this.getEmployees();
    }
    updateEmployee(employee: Employee) {

        const dialogRef = this.dialog.open(UpdateEmployeeComponent, { data: employee });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.onUpdateEmloyee(result);
            }
        });
    }

    public getEmployees(): void {
        this.employeeService.getEmployees().subscribe(
            (response: Employee[]) => {
                this.employees = response;
            },
            (error: HttpErrorResponse) => {
                this.toastr.error(error.message, 'Error');
            }
        );
    }




    public onUpdateEmloyee(employee: Employee): void {
        this.employeeService.updateEmployee(employee).subscribe(
            (response: Employee) => {
                this.toastr.success('Employee updated successfully!', 'Success');
                this.getEmployees();
            },
            (error: HttpErrorResponse) => {
                this.toastr.error(error.message, 'Error');
            }
        );
    }

    public onDeleteEmloyee(employeeId: number): void {
        this.employeeService.deleteEmployee(employeeId).subscribe(
            (response: void) => {
                this.toastr.success('Employee deleted successfully!', 'Success');
                this.getEmployees();
            },
            (error: HttpErrorResponse) => {
                this.toastr.error(error.message, 'Error');
            }
        );
    }

    deleteEmployee(name: string, id: number) {
        if (confirm('Are you sure to delete ' + name)) {
            this.onDeleteEmloyee(id);
        }
    }


}

import { EmployeeService } from './employee.service';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { EmployeesComponent } from './employees/employees.component';



@NgModule({
    declarations: [
        AppComponent,
        TemplateDrivenFormComponent,
        NavbarComponent,
        AddEmployeeComponent,
        UpdateEmployeeComponent,
        EmployeesComponent
    ],
    entryComponents: [UpdateEmployeeComponent],
    exports: [

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule,
        MatDialogModule,
        RouterModule.forRoot(
            [
                {
                    path: "employees",
                    component: EmployeesComponent
                },
                {
                    path: "addEmployee",
                    component: AddEmployeeComponent
                }
            ]
        ),
        BrowserAnimationsModule
    ],
    providers: [EmployeeService],
    bootstrap: [AppComponent]
})
export class AppModule { }

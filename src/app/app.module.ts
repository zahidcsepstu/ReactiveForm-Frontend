import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        ContactFormComponent,
        SidenavComponent,
        SignupFormComponent,
        DialogComponent
    ],
    entryComponents: [DialogComponent],
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
                    path: "sign-up",
                    component: SignupFormComponent
                },
                {
                    path: "course-component",
                    component: CoursesComponent
                }
            ]
        ),
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

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

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        ContactFormComponent,
        SignupFormComponent,
        SidenavComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
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
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

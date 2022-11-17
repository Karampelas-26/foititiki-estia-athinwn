import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";
import { StudentProfileComponent } from './components/admin/student-profile/student-profile.component';
import { DatePipe } from '@angular/common';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AddStudentsComponent } from './components/admin/add-students/add-students.component';
import { NotifyStudentsComponent } from './components/admin/notify-students/notify-students.component';
import { ComplaintComponent } from './components/student/complaint/complaint.component';
import { DamageComponent } from './components/student/damage/damage.component';
import { ProfileComponent } from './components/student/profile/profile.component';
import { StudentHeaderComponent } from './components/student/student-header/student-header.component';
import { MainPageStudentComponent } from './components/student/main-page-student/main-page-student.component';
import { MainPageAdminComponent } from './components/admin/main-page-admin/main-page-admin.component';
import { MainPageMaintainerComponent } from './components/maintainer/main-page-maintainer/main-page-maintainer.component';
import { MaintainerHeaderComponent } from './components/maintainer/maintainer-header/maintainer-header.component';
import { DamagesComponent } from './components/maintainer/damages/damages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    DashboardComponent,
    StudentProfileComponent,
    AdminHeaderComponent,
    AddStudentsComponent,
    NotifyStudentsComponent,
    ComplaintComponent,
    DamageComponent,
    ProfileComponent,
    StudentHeaderComponent,
    MainPageStudentComponent,
    MainPageAdminComponent,
    MainPageMaintainerComponent,
    MaintainerHeaderComponent,
    DamagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

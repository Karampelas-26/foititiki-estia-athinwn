import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './components/admin/add-students/add-students.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { MainPageAdminComponent } from './components/admin/main-page-admin/main-page-admin.component';
import { NotifyStudentsComponent } from './components/admin/notify-students/notify-students.component';
import { StudentProfileComponent } from './components/admin/student-profile/student-profile.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ComplaintComponent } from './components/student/complaint/complaint.component';
import { DamageComponent } from './components/student/damage/damage.component';
import { MainPageStudentComponent } from './components/student/main-page-student/main-page-student.component';
import { ProfileComponent } from './components/student/profile/profile.component';

// const routes: Routes = [
//   {path: '', component: SignInComponent},
//   {path: 'dashboard', component: DashboardComponent},
//   {path: 'dashboard/profile/:id', component: StudentProfileComponent},
//   {path: 'dashboard/addstudent', component: AddStudentsComponent},
//   {path: 'dashboard/notifystudents', component: NotifyStudentsComponent}
// ];

const routes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'main-page-admin', component: MainPageAdminComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'profile/:id', component: StudentProfileComponent},
      {path: 'addstudent', component: AddStudentsComponent},
      {path: 'notifystudents', component: NotifyStudentsComponent}
    ]
  },
  {path: "main-page-student", component: MainPageStudentComponent,
    children: [
      {path: 'complaint', component: ComplaintComponent},
      {path: 'damage', component: DamageComponent},
      {path: 'profile', component: ProfileComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/model/student';
import { StudentsService } from 'src/app/services/admin/students.service';


interface StudentSearchOptions {
  value: string,
  viewValue: string
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  optionsSerach: StudentSearchOptions[] = [
    {value: 'studentId', viewValue: 'Student ID'},
    {value: 'room', viewValue: 'Room'},
    {value: 'am', viewValue: 'AM'},
    {value: 'lastname', viewValue: 'Last name'},
    {value: 'firstname', viewValue: 'First name'},
    {value: 'university', viewValue: 'University'},
    {value: 'dateRegistrationUniversity', viewValue: 'Date Registration University'},
    {value: 'dateRegistrationDorm', viewValue: 'Date Registration Dorm'},
    {value: 'phone', viewValue: 'Phone'},
    {value: 'email', viewValue: 'Email'},
  ]

  students: any = [];

  constructor(private studentService: StudentsService, private http:HttpClient ) { }

  ngOnInit() {
    // this.studentService.getStudents().subscribe((data) => {
    //   this.students = data.students;
    // })
    // console.log(this.students)
    // this.http.get<any>('lcoalhost:3000/dashboard').subscribe(data => {
    //   this.students = data;
    // })

    // console.log(this.students)

    // this.studentService.getStudents().subscribe( (data) => {
    //   this.students = data
    // });
    // // console.log(this.students);
    // this.studentService.getData().subscribe(data => console.log(data))
    // this.getser()
  }


  // getser() {
  //   this.http.get('localhost:3000/dashboard/test1', {responseType: 'json'} ).subscribe(data => console.log(data))
  // }



}

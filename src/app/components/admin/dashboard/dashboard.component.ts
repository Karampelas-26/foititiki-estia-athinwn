import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Student } from 'src/app/model/student';
import { StudentsService } from 'src/app/services/admin/students.service';


interface StudentSearchOptions {
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  optionsSerach: StudentSearchOptions[] = [
    {value: 'studentId', viewValue: 'Student ID'},
    {value: 'room', viewValue: 'Room'},
    {value: 'am', viewValue: 'AM'},
    {value: 'lastname', viewValue: 'Last name'},
    {value: 'firstname', viewValue: 'First name'},
    {value: 'university', viewValue: 'University'},
    // {value: 'dateRegistrationUniversity', viewValue: 'Date Registration University'},
    // {value: 'dateRegistrationDorm', viewValue: 'Date Registration Dorm'},
    {value: 'email', viewValue: 'Email'},
    {value: 'phone', viewValue: 'Phone'},
  ]

  students: Student[] = [];
  page: number = 0;
  pageSize: number = 38;

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<void>();
  data = {
    name: 'hi', value: 'world'
  }
  selectedStudent: Student = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    room: 0,
    university: '',
    phone: '',
    am: '',
    dateuniversity: '',
    datedorm: '',
    comments: ''
  };

  constructor(
    private studentService: StudentsService,
    private router: Router,
    public datepipe: DatePipe
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 38
    };
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
      this.dtTrigger.next();
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  studentProfile(student: Student) {
    this.studentService.setStudent(student);
    this.router.navigate([`/dashboard/profile/${student.id}`])
  }

  setStudent(student: Student) {
    console.log(student)
    const dateDorm = student.datedorm;
    const dateUni = student.dateuniversity;

    console.log(student.datedorm);

    const strDateDorm = this.datepipe.transform(new Date(dateDorm), 'YYYY-MM-dd');
    const strDateUni = this.datepipe.transform(new Date(dateUni), 'YYYY-MM-dd');
    this.selectedStudent = student;
    console.log(this.selectedStudent);

    this.selectedStudent.datedorm = strDateDorm as string;
    this.selectedStudent.dateuniversity = strDateUni as string;
  }

  onSave() {
    this.studentService.updateStudent(this.selectedStudent).subscribe();
  }

  onDelete() {
    const index = this.students.indexOf(this.selectedStudent)
    if (index !== -1) {
      this.students.splice(index, 1);
    }
    this.studentService.deleteStudent(this.selectedStudent.id).subscribe()
  }
}

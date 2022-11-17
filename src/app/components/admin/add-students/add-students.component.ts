import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/model/student';
import { StudentsService } from 'src/app/services/admin/students.service';
import { StudentHeaderComponent } from '../../student/student-header/student-header.component';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {


  // reactiveForm!: FormGroup;

  student: Student = {
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
    private studentService: StudentsService
  ) { }

  ngOnInit(): void {
    // this.reactiveForm = new FormGroup({
    //   firstname: new FormControl("", [Validators.required]),
    //   lastname: new FormControl("", [Validators.required]),
    //   email: new FormControl("", [Validators.required]),
    //   phone: new FormControl("", [Validators.required]),
    //   // university: new FormControl("", [Validators.required]),
    //   // am: new FormControl("", [Validators.required]),
    //   // room: new FormControl("", [Validators.required]),
    //   // dormdate: new FormControl("", [Validators.required]),
    //   // universitydate: new FormControl("", [Validators.required]),
    //   // comments: new FormControl("")
    // })
  }

  onAddStudent() {

  }

  onSubmit(addStudent: any) {
    this.student.id = uuidv4();
    console.log(this.student.id);

    this.student.firstname = addStudent.form.value.firstname;
    this.student.lastname = addStudent.form.value.lastname;
    this.student.email = addStudent.form.value.email;
    this.student.am = addStudent.form.value.am;
    this.student.university = addStudent.form.value.university;
    this.student.comments = addStudent.form.value.comments;
    this.student.datedorm = addStudent.form.value.datedorm;
    this.student.dateuniversity = addStudent.form.value.dateuniversity;
    this.student.phone = addStudent.form.value.phone;

    console.log(this.student)
    this.studentService.createStudent(this.student).subscribe()
  }

  file!: File;

  fileChange(event: any) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        this.file = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', this.file, this.file.name);
        // let headers = new Headers();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        // headers.append('Content-Type', 'multipart/form-data');
        // headers.append('Accept', 'application/json');
        // let options = new RequestOptions({ headers: headers });
        // this.http.post(`${this.apiEndPoint}`, formData, options)
        //     .map(res => res.json())
        //     .catch(error => Observable.throw(error))
        //     .subscribe(
        //         data => console.log('success'),
        //         error => console.log(error)
        //     )
    }
  }

  onUpload() {
    console.log('onupload')
    this.studentService.uploadCSV(this.file).subscribe();
  }
}

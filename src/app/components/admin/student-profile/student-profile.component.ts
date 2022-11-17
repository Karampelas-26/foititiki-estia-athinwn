import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentsService } from 'src/app/services/admin/students.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  student!: Student;
  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.studentService.selectedStudent$.subscribe((value) => {
      this.student = value;
    })
  }


  changePtoInput() {
    const p = document.getElementById('p')

  }

  george: string = "george.karampelas.26@gmail.com"

  edit(idEdit: string, idCheck: string, idCancel: string, input: string, p: string) {
    // console.log("asdf");
    const btnEdit = document.getElementById(idEdit);
    const btnCheck = document.getElementById(idCheck);
    const btnCancel = document.getElementById(idCancel);
    const inputElement = document.getElementById(input);
    const pElement = document.getElementById(p);

    btnEdit!.style.display = 'none';
    btnCheck!.style.display = 'inline';
    btnCancel!.style.display = 'inline';
    inputElement!.style.display = 'block';
    pElement!.style.display = 'none';
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import { Student } from 'src/app/model/student';
import { BehaviorSubject } from 'rxjs'
import { Token } from '@angular/compiler';
import { TokenManagerService } from '../token-manager.service';



@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  httpHeader = new HttpHeaders();

  serverUrl = 'http://localhost:3000/dashboard/';

  private student$ = new BehaviorSubject<any>({});
  selectedStudent$ = this.student$.asObservable();

  constructor(
    private http: HttpClient,
    private tokenManager: TokenManagerService
  ) { }



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tokenManager.getToken()}`,
    })
  }

  httpOptionsForFile = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${this.tokenManager.getToken()}`,
    })
  }

  getStudents() {
    return this.http.get<Student[]>(this.serverUrl, this.httpOptions);
  }

  deleteStudent(id: string) {
    return this.http.delete(`${this.serverUrl}${id}`, this.httpOptions);
  }

  createStudent(student: Student) {
    return this.http.post(this.serverUrl, student, this.httpOptions)
  }

  uploadCSV(file: File) {
    console.log(`${this.serverUrl}file`);
    console.log(file);

    return this.http.post(`${this.serverUrl}file`, file, this.httpOptionsForFile)
  }

  updateStudent(student: Student) {
    return this.http.put<Student>(this.serverUrl, student, this.httpOptions)
  }


  setStudent(student: Student) {
    this.student$.next(student);
  }


}

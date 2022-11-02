import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Student } from 'src/app/model/student';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  httpHeaders = {
    headers:
      new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        }
        )
  }


  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  // apiUrl = 'localhost:3000/dashboard/'

  // getStudents(): Observable<Student[]>{
  //   return this.http.get<Student[]>(this.apiUrl, this.httpHeaders)
  // }

  // getMessage(): Observable<any> {
  //   return this.http.get('localhost:3000/dashboard/');
  // }

  // getData(): Observable<any> {
  //   return from(
  //     fetch(
  //       'http://localhost:3000/dashboard/', // the url you are trying to access
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         method: 'GET', // GET, POST, PUT, DELETE
  //         mode: 'no-cors' // the most important option
  //       }
  //     ));
  // }
}

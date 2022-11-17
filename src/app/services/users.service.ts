import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private serverURL = "http://localhost:3000/users/"

  // private admin$ = new BehaviorSubject<any> ({});
  // isAdmin$ = this.admin$.asObservable();

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string) {
    return this.http.post(`${this.serverURL}login`, {email, password})
  }
}

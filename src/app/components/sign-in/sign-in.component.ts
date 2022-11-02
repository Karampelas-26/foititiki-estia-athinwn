import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",

    } ),responseType: 'text' as 'json'
  };

  ngOnInit(): void {
    this.a()

  }

  a() {
    this.http.get('http://localhost:3000/', this.httpOptions).subscribe(data => {console.log(data)})
  }

}

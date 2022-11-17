import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {

  private token_app: string = 'app_token';
  private user_role: string = 'user_role';


  private token$ = new BehaviorSubject<any> ({});
  accessToken$ = this.token$.asObservable();

  private role$ = new BehaviorSubject<any> ({});
  userRole$ = this.role$.asObservable();

  constructor() { }

  setToken(token: string) {
    localStorage.setItem(this.token_app, token)
  }

  setUserRole(role: string) {
    localStorage.setItem(this.user_role, role)
    console.log("tokenmanager: " + role);

  }

  getUserRole() {
    return localStorage.getItem(this.user_role);
  }

  getToken() {
    return localStorage.getItem(this.token_app)
  }

  isTokenExist() {
    return localStorage.getItem(this.token_app) != null;
  }

  clearToken() {
    localStorage.removeItem(this.token_app);
    localStorage.removeItem(this.user_role);
  }

  setTokenAndRoleAsObservables(){
    this.role$.next(this.getUserRole());
    this.token$.next(this.getToken());
  }

}

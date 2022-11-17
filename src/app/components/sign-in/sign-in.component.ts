import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenManagerService } from 'src/app/services/token-manager.service';
import { UsersService } from 'src/app/services/users.service';
// import { DashboardComponent } from '../admin/dashboard/dashboard.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username: string = 'admin';
  password: string = '1234';
  text: any;

  constructor(
    private router: Router,
    private userService: UsersService,
    private tokenManager: TokenManagerService
  ) { }

  ngOnInit(): void {
    if (this.tokenManager.isTokenExist()) {
      this.redirectToMainPage();
    }
  }

  onSignIn() {
    this.userService.signIn(this.username, this.password).subscribe((response) => {
      this.tokenManager.setToken(Object(response).token);
      this.tokenManager.setUserRole(Object(response).role);
      this.redirectToMainPage()
    });
  }

  redirectToMainPage() {

    this.tokenManager.setTokenAndRoleAsObservables()

    const role = this.tokenManager.getUserRole();
    if(role == 'ROLE_USER'){
      this.router.navigate(['/main-page-student']);
    }
    if(role == 'ROLE_ADMIN'){
      this.router.navigate(['/main-page-admin']);
    }

  }

}

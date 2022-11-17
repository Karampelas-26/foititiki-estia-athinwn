import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TokenManagerService } from 'src/app/services/token-manager.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: string = '';
  userR!: string;

  constructor(
    private userService: UsersService,
    private tokenManager: TokenManagerService,
    private router: Router
  ) { }

  isAdmin!: boolean;

  ngOnInit(): void {
    this.setUserRole();
  }

  onLogOut() {
    this.tokenManager.clearToken();
    this.router.navigate(['/']);
    this.user = '';
  }

  setUserRole() {
    this.tokenManager.setTokenAndRoleAsObservables();
    this.tokenManager.userRole$.subscribe( role => {
      console.log(role);

      this.user = role
    });
  }

}

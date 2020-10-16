import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from './iuser';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  users: Iuser[] = [];
  errorMessage = '';

  wrongEmail = false;
  wrongPassword = false;

  _emailInput = '';
  get emailInput(): string {
    return this._emailInput;
  }
  set emailInput(value: string) {
    if (value === '' ) {
      return;
    }
    this._emailInput = value;   
  }

  _passwordInput = '';
  get passwordInput(): string {
    return this._passwordInput;
  }
  set passwordInput(value: string) {
    if (value === '' ) {
      return;
    }
    this._passwordInput = value;   
  }
  
  constructor(private router: Router,
              private loginService: LoginService) {}

  ngOnInit(): void {
    // this.loginService.getUsers().subscribe({
    //     next: usersL => this.users = usersL,
    //     error: err => this.errorMessage = err  
    // });
    // console.log(this.users);
  }

  onLogin(): void {
    this.loginService.getUsers().subscribe({
      next: users => {
        let user = users.find(user => user.email === this._emailInput);
        if ( !user ) {
          this.wrongEmail = true;
          return;
        }
        else {
          this.wrongEmail = false;
        }
        if ( user.password !== this._passwordInput ) {
          this.wrongPassword = true;
          return;
        }
        else {
          this.wrongPassword = false;
        }
        this.router.navigate(['/todolist']);
      },
      error: err => this.errorMessage = err  
    });

    // let user = this.users.find(user => user.email === this._emailInput);
    // if ( !user ) {
    //   this.wrongEmail = true;
    //   return;
    // }
    // else {
    //   this.wrongEmail = false;
    // }
    // if ( user.password !== this._passwordInput ) {
    //   this.wrongPassword = true;
    //   return;
    // }
    // else {
    //   this.wrongPassword = false;
    // }
    // this.router.navigate(['/todolist']);
    
  }
}

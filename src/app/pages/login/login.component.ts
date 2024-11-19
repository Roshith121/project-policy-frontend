import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // loginData = {
  //   username: '',
  //   password: '',
  // };
  msg = '';
  alert: boolean = false;
  user = new User();

  constructor(private service: LoginService, private router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    this.service.loginUser(this.user).subscribe(
      (data) => {
        localStorage.setItem('loggedInUser', this.user.username);
        console.log('login data is ' + this.user.username);
        console.log('Response received');
        alert('Successfully!! Logged in');
        this.router.navigate(['/homepage']);
      },
      (error) => {
        console.log('Bad Credentials');
        this.alert = true;
        this.msg = 'Bad Credentials!! Please enter valid username and password';
      }
    );
  }
}

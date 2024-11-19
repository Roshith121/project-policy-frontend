import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  username: any = '';
  constructor() {}

  ngOnInit(): void {}

  loggedIn() {
    this.username = localStorage.getItem('loggedInUser');
    return localStorage.getItem('loggedInUser');
  }

  onLogout() {
    return localStorage.removeItem('loggedInUser');
  }
}

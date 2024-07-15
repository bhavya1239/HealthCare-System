// src/app/login/login.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }

  login() {
    const credentials = {
      email: this.model.email,
      password: this.model.password
    };

    this.authService.authenticate(credentials).subscribe(
      (response: { token: string }) => {
        if (response && response.token) {
          this.authService.setToken(response.token); // Store the token using AuthService
          console.log(response.token);
          this.router.navigate(['']);  // Navigate to the home page or another route
        } else {
          alert('Authentication failed.');
        }
      },
      (error: any) => {
        alert('Authentication failed.');
      }
    );
  }
}

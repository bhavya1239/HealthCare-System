import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminNavbarComponent],
  templateUrl: './register-user-form.component.html',
  styleUrls: ['./register-user-form.component.css']
})
export class RegisterUserFormComponent {
  registeringUser: User = {
    userId: "",
    firstName: "",
    lastName: "",
    password: "",
    contactNo: "",
    userRole: "",
    emailId: "",
    userName: undefined,
    userPassword: undefined
  };

  constructor(private authService: AuthService, private router: Router) {}

  update(form: NgForm) {
    if (form.invalid) {
      alert('Please fill in all required fields.');
      return;
    }

    this.authService.register(this.registeringUser).subscribe({
      next: (data) => {
        console.log(data);
        sessionStorage.setItem('token', data.token);
        this.router.navigateByUrl('/login');
      },
      error: (err) => {
        alert('Registration failed.');
      }
    });
  }
}

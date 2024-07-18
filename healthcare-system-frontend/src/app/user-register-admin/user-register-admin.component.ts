import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { Router } from '@angular/router';
import { User } from './user';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-register-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminNavbarComponent],
  templateUrl: './user-register-admin.component.html',
  styleUrls: ['./user-register-admin.component.css']
})
export class UserRegisterAdminComponent {
  registeringUser: User = {
    firstName: "",
    lastName: "",
    password: "",
    contactNo: "",
    admin: false,
    email: "",
  };

  constructor(private adminService: AdminService, private router: Router) {}
  checkRole:string="false";
  update(form: NgForm) {
    if (form.invalid) {
      alert('Please fill in all required fields.');
      return;
    }
    this.checkRole=="true"?this.registeringUser.admin=true:this.registeringUser.admin=false;
    //console.log(this.registeringUser);
    
    this.adminService.register(this.registeringUser).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigateByUrl('/user-list');
      },
      error: (err) => {
        alert('Registration failed.');
      }
    });
  }
}

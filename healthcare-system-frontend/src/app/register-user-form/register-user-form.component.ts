import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../service/admin.service';
import { User } from '../models/user.model';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register-user-form',
  standalone: true,
  imports: [FormsModule,AdminNavbarComponent],
  templateUrl: './register-user-form.component.html',
  styleUrl: './register-user-form.component.css'
})
export class RegisterUserFormComponent {
  registeringUser:User={
    userId: "",
    userPassword:"" ,
    userName: "",
    contactNo: "",
    userRole: "",
    emailId: "",
  };
  constructor(private adminService:AdminService,private router : Router){}

  update() {
       this.adminService.register(this.registeringUser).subscribe(data=>console.log(data));
        this.router.navigateByUrl('/user-list');
  }
}

// src/app/login/login.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../service/admin.service';
import { Credentials } from '../models/credentials';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  model: any = {};

  credentials:Credentials={
    email:"",
    password:""
  }

  constructor(
    private router: Router,
    private adminService: AdminService
  ) {}


  login() {
    

    this.adminService.login(this.credentials).subscribe((data: any)=>{
        if(data.admin==true)      
        this.router.navigateByUrl('admin');
      else
      this.router.navigateByUrl('user-page');
    },
    (error:any)=>{alert("Wrong Credentials")}
  );
  }
}

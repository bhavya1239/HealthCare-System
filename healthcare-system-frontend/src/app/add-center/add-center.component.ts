import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { Router } from '@angular/router';
import { DiagnosticCenter } from '../models/diagnostic-center.model';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-add-center',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  AdminNavbarComponent],
  templateUrl: './add-center.component.html',
  styleUrl: './add-center.component.css'
})
export class AddCenterComponent {
  center:DiagnosticCenter={
    centerName:'',
  }
  constructor(private router:Router,private adminService:AdminService) {
  }

  

  onSubmit(): void {
      this.adminService.addCenter(this.center).subscribe(data=>console.log(data));
      this.router.navigateByUrl('/center-list');
    }
  }

import { Component, OnInit } from '@angular/core';
import { AdminNavbarComponent } from "../admin-navbar/admin-navbar.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AddTestComponent } from '../add-test/add-test.component';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-test-list',
  standalone: true,
  imports: [AdminNavbarComponent,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AddTestComponent,
    ],
  templateUrl: './test-list.component.html',
  styleUrl: './test-list.component.css'
})
export class TestListComponent implements OnInit  {
  Tests:any;
  constructor(private adminService:AdminService){}
  ngOnInit(): void {
    this.adminService.getTest().subscribe(data=>this.Tests=data);
  }
    
}

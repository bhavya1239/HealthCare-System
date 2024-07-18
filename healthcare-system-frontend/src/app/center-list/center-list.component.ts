import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { Router, RouterModule } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-center-list',
  standalone: true,
  imports: [CommonModule,AdminNavbarComponent,RouterModule],
  templateUrl: './center-list.component.html',
  styleUrl: './center-list.component.css'
})
export class CenterListComponent implements OnInit {
  constructor(private adminService:AdminService){}
  Centers:any;

  ngOnInit(): void {
    this.adminService.getAllCenters().subscribe(data=>this.Centers=data);
  }
  


}

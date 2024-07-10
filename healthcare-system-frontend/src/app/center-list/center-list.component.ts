import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-center-list',
  standalone: true,
  imports: [CommonModule,AdminNavbarComponent,RouterModule],
  templateUrl: './center-list.component.html',
  styleUrl: './center-list.component.css'
})
export class CenterListComponent {
  Centers:any;
}

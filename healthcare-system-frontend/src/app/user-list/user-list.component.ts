import { User } from './../models/user.model';
import { Component, OnInit, NgModule } from '@angular/core';
import { UserService } from '../service/user.service';
import { DiagnosticCenter } from '../models/diagnostic-center.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  Users: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.Users = data;
    });
  }
}

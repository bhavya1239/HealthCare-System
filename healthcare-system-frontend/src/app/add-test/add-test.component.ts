import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Observable } from 'rxjs';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { AdminService } from '../service/admin.service';
import { DiagnosticCenter } from '../models/diagnostic-center.model';
import { Test } from '../models/test.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-test',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AddTestComponent,
    AdminNavbarComponent  ],
  templateUrl: './add-test.component.html',
  styleUrl: './add-test.component.css'
})
export class AddTestComponent implements OnInit {
  test:Test={
    testName:"",
    diagnosticCenter:{
      centerId:'',
    }
  };
  diagnosticCenters:any[]=[];
  constructor(private adminService:AdminService,private router:Router){}
  center:number=0;
  ngOnInit(): void {
    this.adminService.getAllCenters().subscribe(data=>this.diagnosticCenters=data);
  }
  onSubmit(){
    this.test.diagnosticCenter.centerId=this.center;
    
    this.adminService.addTest(this.test).subscribe(data=>console.log(data));
    this.router.navigateByUrl('/test-list');
    
  }
  // testForm: FormGroup;
  // diagnosticCenters$: Observable<DiagnosticCenter[]>;

  // constructor(private fb: FormBuilder, private http: HttpClient) {
  //   this.testForm = this.fb.group({
  //     testName: ['', Validators.required],
  //     diagnosticCenter: ['', Validators.required]
  //   });

  //   this.diagnosticCenters$ = this.getDiagnosticCenters();
  // }

  // ngOnInit(): void {}

  // getDiagnosticCenters(): Observable<DiagnosticCenter[]> {
  //   return this.http.get<DiagnosticCenter[]>('/api/diagnostic-centers');
  // }

  // onSubmit(): void {
  //   if (this.testForm.valid) {
  //     this.http.post('/api/tests', this.testForm.value).subscribe(response => {
  //       console.log('Test added successfully', response);
  //     });
  //   }
  // }
}

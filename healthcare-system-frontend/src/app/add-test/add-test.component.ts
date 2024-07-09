import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Observable } from 'rxjs';

interface DiagnosticCenter {
  id: number;
  name: string;
}

@Component({
  selector: 'app-add-test',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AddTestComponent
  ],
  templateUrl: './add-test.component.html',
  styleUrl: './add-test.component.css'
})
export class AddTestComponent implements OnInit {
  testForm: FormGroup;
  diagnosticCenters$: Observable<DiagnosticCenter[]>;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.testForm = this.fb.group({
      testName: ['', Validators.required],
      diagnosticCenter: ['', Validators.required]
    });

    this.diagnosticCenters$ = this.getDiagnosticCenters();
  }

  ngOnInit(): void {}

  getDiagnosticCenters(): Observable<DiagnosticCenter[]> {
    return this.http.get<DiagnosticCenter[]>('/api/diagnostic-centers');
  }

  onSubmit(): void {
    if (this.testForm.valid) {
      this.http.post('/api/tests', this.testForm.value).subscribe(response => {
        console.log('Test added successfully', response);
      });
    }
  }
}

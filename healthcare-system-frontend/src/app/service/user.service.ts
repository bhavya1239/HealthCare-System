import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { DiagnosticCenter } from '../models/diagnostic-center.model';
import { Appointment } from '../models/appointment.model';
import { Test } from '../models/test.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/admin';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/allUsers`);
  }

  getTests(centerId: string): Observable<Test[]> {
    return this.http.get<Test[]>(`${this.apiUrl}/centers/${centerId}/tests`);
  }

  makeAppointment(
    userId: string,
    centerId: string,
    testId: number,
    datetime: string
  ): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.apiUrl}/appointments`, {
      userId,
      centerId,
      testId,
      datetime,
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { DiagnosticCenter } from '../models/diagnostic-center.model';
import { Test } from '../models/test.model';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/admin';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/allUsers`);
  }

  addCenter(center: DiagnosticCenter): Observable<DiagnosticCenter> {
    return this.http.post<DiagnosticCenter>(`${this.apiUrl}/addCenter`, center);
  }

  getAllCenters(): Observable<DiagnosticCenter[]> {
    return this.http.get<DiagnosticCenter[]>(`${this.apiUrl}/allCenters`);
  }

  removeCenter(centerId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/centers/${centerId}`);
  }

  addTest(test: Test): Observable<Test> {
    return this.http.post<Test>(`${this.apiUrl}/addTest`, test);
  }

  removeTest(testId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/tests/${testId}`);
  }

  getAppointments(centerId: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/centers/${centerId}/appointments`);
  }

  approveAppointment(appointmentId: number, approved: boolean): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/appointments/${appointmentId}/approve`, { approved });
  }
}

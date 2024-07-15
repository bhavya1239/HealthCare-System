// src/app/service/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  authenticate(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/authenticate`, data);
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  isLoggedIn() {
    return !!sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.removeItem('token');
  }

  setToken(token: any) {
    sessionStorage.setItem('token', token);
  }
}

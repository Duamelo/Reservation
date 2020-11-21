import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:2000/api/users/auth/customer/';
const AUTH_API2 = 'http://localhost:2000/api/users/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API2 + 'login', {
      telephone: credentials.telephone,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      firsname: user.firstname,
      lastname: user.lastname,
      country: user.country,
      email: user.email,
      telephone: user.telephone,
      password: user.password
    }, httpOptions);
  }
}
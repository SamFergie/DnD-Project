import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginandregService {
  REST_API: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  login(username: String, password: String): Observable<any> {
    let API_URL = `${this.REST_API}/POST/login`;
    var userData: User = {
      username: username,
      password: password
    }
    return this.http.post<any>(API_URL, userData, { observe: 'response' });
  }
}

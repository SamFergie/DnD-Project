import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/User';

const HttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class LoginandregService {
    REST_API: string = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    login(username: String, password: String): Observable<any> {
        let API_URL = `${this.REST_API}/POST/login`;
        var userData: User = {
            username: username,
            password: password,
        };
        return this.http.post<any>(API_URL, userData, { observe: 'response' });
    }
    
    register(username: String, password: String): Observable<any> {
      let API_URL = `${this.REST_API}/POST/register`;
      var userData: User = {
          username: username,
          password: password,
      };
      return this.http.post<any>(API_URL, userData, { observe: 'response' });
    }

    getCR(monsterData: any): Observable<any> {
        let API_URL = `${this.REST_API}/POST/predictCR`;
        return this.http.post<any>(API_URL, monsterData, { observe: 'response' });
    }

    addMonster(monsterData: any): Observable<any> {
        let API_URL = `${this.REST_API}/POST/addMonster`;
        return this.http.post<any>(API_URL, monsterData, { observe: 'response' });
    }

    getUser(username: string): Observable<any> {
          console.log('Getting user');
          let API_URL = `${this.REST_API}/GET/Users/${username}`;
          // console.log(API_URL);
          return this.http.get(API_URL, {
              observe: 'response',
              responseType: 'json',
          });
    }

    getMonsterOfUser(username: string): Observable<any> {
        let API_URL = `${this.REST_API}/GET/MonstersByName/${username}`;
        return this.http.get(API_URL, {
            observe: 'response',
            responseType: 'json',
        });
    }

    getMonsterOfId(id: string): Observable<any> {
        let API_URL = `${this.REST_API}/GET/MonstersById/${id}`;
        return this.http.get(API_URL, {
            observe: 'response',
            responseType: 'json',
        });
    }

    deleteMonsterOfid(id: string): Observable<any> {
        let API_URL = `${this.REST_API}/DELETE/deleteMonster/${id}`;
        return this.http.delete(API_URL, {
            observe: 'response',
        });
    }
}

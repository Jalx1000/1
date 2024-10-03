import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../environments/dev.enviroments';
import { console } from 'inspector';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  token = 'sadas'
  getUser(): Observable<any> {
    return this.httpClient.get(`${API_URL}/userts`).pipe((res) => res);
  }

  isAuth(){
    // const item = localStorage.getItem('user');
    return false
  }
}

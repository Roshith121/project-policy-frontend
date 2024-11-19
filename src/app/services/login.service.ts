import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string="http://localhost:5050/login";
  constructor(private http:HttpClient) { }

  public loginUser(user:User):Observable<any>{
     return this.http.post<any>(`${this.url}`,user);
  }
}

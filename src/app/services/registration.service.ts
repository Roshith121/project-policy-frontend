import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url="http://localhost:5050/registeruser";
  constructor(private http:HttpClient) { }

  public registerUsers(user:User):Observable<any>{
   return this.http.post<any>(`${this.url}`,user);
  }
}

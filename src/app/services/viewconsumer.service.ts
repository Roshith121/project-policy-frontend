import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumerbusiness } from '../classes/consumerbusiness';

@Injectable({
  providedIn: 'root',
})
export class ViewconsumerService {
  constructor(private http: HttpClient) {}

  public viewConsumerDetails(consumer: Consumerbusiness): Observable<any> {
    return this.http.get<any>(
      'http://localhost:8000/consumer/viewConsumerBusiness'
    );
  }

  getConsumerById(id: number): Observable<Consumerbusiness> {
    return this.http.get<Consumerbusiness>(
      `http://localhost:8000/consumer/viewConsumerBusiness/${id}`
    );
  }
}

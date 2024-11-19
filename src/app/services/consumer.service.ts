import {
  HttpClient,
  HttpClientJsonpModule,
  HttpClientModule,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumerbusiness } from '../classes/consumerbusiness';

@Injectable({
  providedIn: 'root',
})
export class ConsumerService {
  constructor(private http: HttpClient) {}

  public doSubmitConsumerDetails(consumer: Consumerbusiness): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8000/consumer/createConsumerBusiness',
      consumer
    );
  }
}

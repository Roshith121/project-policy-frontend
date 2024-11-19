import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cons, Observable } from 'rxjs';
import { Consumerbusiness } from '../classes/consumerbusiness';

@Injectable({
  providedIn: 'root',
})
export class UpdateconsumerService {
  constructor(private http: HttpClient) {}

  // public updateConsumerDetails(id: number): Observable<any> {
  //   return this.http.post<any>(
  //     `http://localhost:8000/consumer/updateConsumerBusiness`,
  //     id
  //   );
  // }

  updateConsumerById(id: number): Observable<Consumerbusiness> {
    return this.http.get<Consumerbusiness>(
      `http://localhost:8000/consumer/viewConsumerBusiness/${id}`
    );
  }

  doUpdateConsumerDetails(
    id: number,
    consumer: Consumerbusiness
  ): Observable<any> {
    return this.http.put<Consumerbusiness>(
      `http://localhost:8000/consumer/updateConsumerBusiness/${id}`,
      consumer
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Businessproperty } from '../classes/businessproperty';

@Injectable({
  providedIn: 'root',
})
export class BusinesspropertyService {
  baseUrl: string = 'http://localhost:8000/consumer';
  constructor(private http: HttpClient) {}

  public saveConsumerPropertyDetails(
    property: Businessproperty
  ): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/createBusinessProperty`,
      property
    );
  }

  public getConsumerPropertyDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/viewConsumerProperty/${id}`);
  }

  public updateConsumerPropertyDetails(
    id: number,
    property: Businessproperty
  ): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}/updateBusinessProperty/${id}`,

      property
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../classes/policy';

@Injectable({
  providedIn: 'root',
})
export class ConsumerpolicyService {
  baseUrl: string = 'http://localhost:8002';
  constructor(private http: HttpClient) {}

  public createConsumerPolicy(consumerPolicy: Policy): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/createPolicy`, consumerPolicy);
  }

  public issuePolicy(consumerPolicy: Policy): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/issuePolicy`, consumerPolicy);
  }
  public getPolicy(pid: string, consumerid: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/viewPolicy/${pid}/${consumerid}`
    );
  }

  public getQuotes(
    businessValue: number,
    propertyValue: number,
    propertyType: string
  ): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/getQuotes/${businessValue}/${propertyValue}/${propertyType}`
    );
  }
}

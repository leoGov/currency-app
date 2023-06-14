import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiKey = 'xt55B5H5wQ0ONL6oUOrEA3Jq7U4sOGzxYnpsub2T';
  private apiUrl = 'https://api.currencyapi.com/v3/convert';

  constructor(private http: HttpClient) {}

  convertCurrency(fromCurrency: string, toCurrency: string, amount: number): Observable<any> {
    const params = new HttpParams()
      .set('apikey', this.apiKey)
      .set('from', fromCurrency)
      .set('to', toCurrency)
      .set('amount', String(amount));

    return this.http.get(this.apiUrl, { params });
  }
}
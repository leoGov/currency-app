import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NewServiceService {
    private apiUrl = 'https://api.apilayer.com/currency_data/live';

    constructor(private http: HttpClient) { }

    getExchangeRates(baseCurrency: string) {
        return this.http.get(`${this.apiUrl}?base=${baseCurrency}`);
    }

    convertAmount(amount: number, fromCurrency: string, toCurrency: string, rates: any) {
        const fromRate = rates[fromCurrency];
        const toRate = rates[toCurrency];
        const convertedAmount = (amount / fromRate) * toRate;
        return convertedAmount;
    }
}

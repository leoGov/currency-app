import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.sass']
})
export class CurrencyComponent implements OnInit {
    amount!: number;
    fromCurrency!: string;
    toCurrency!: string;
    convertedAmount!: number | null;
    startDate!: string; // Значение start_data
    endDate!: string;
  
    constructor(private http: HttpClient) {}
  
    convert() {
      const myHeaders = new HttpHeaders();
      myHeaders.append('apikey', '3vaf5bRTDNWvDRROyv7qUn6anucW4dgg');
  
      const url = `https://api.apilayer.com/currency_data/change?start_date=start_date&end_date=end_date&from=${this.fromCurrency}&to=${this.toCurrency}&amount=${this.amount}`;
  
      this.http.get(url, { headers: myHeaders })
        .subscribe(
          (result: any) => {
            this.convertedAmount = result.converted_amount;
          },
          error => {
            console.log('Error:', error);
            this.convertedAmount = null;
          }
        );
    }

    ngOnInit(): void {
    }
}

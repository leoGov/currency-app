import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';


const appRoutes: Routes = [
    { path: '', component: CurrencyComponent },
]

@NgModule({
    declarations: [
        AppComponent,
        CurrencyComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule,
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

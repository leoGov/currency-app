import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  <h1>angular routes</h1>
  <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'currency-app';
}

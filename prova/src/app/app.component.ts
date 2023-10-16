import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova';
}
export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  description: string;
}

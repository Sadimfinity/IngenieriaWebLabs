import { Component } from '@angular/core';
import { RomanNumbersService } from './services/roman-numbers/roman-numbers.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: string = '';

  async onEnter(value: string) { 
    this.value = value;
    const service = new RomanNumbersService();
    this.value = service.convertNumber(Number(this.value))
  }
  title = 'Números Romanos';
}

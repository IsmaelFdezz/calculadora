import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  display: string = '0'
  firstValue: number | null = null;
  operation: string | null = null;

  game: boolean = false;

  numClick(num: number) {
    if (this.display === '0') {
      this.display = num.toString()
    } else {
      this.display = `${this.display}${num}`;
    }
  }

  clear() {
    this.display = '0'
  }

  selectOperation(operation: string) {
    this.firstValue = parseFloat(this.display);
    this.operation = operation;
    this.display = ' ';
  }

  calculate() {
    const a = this.firstValue;
    const b = parseFloat(this.display);

    let result;

      if (this.operation === 'x') {
        result = a * b;
      } 
      else if (this.operation === '/') {
        result = a / b;
      }
      else if (this.operation === '+') {
        result = a + b;
      }
      else if (this.operation === 's') {
        result = a - b;
      }

      this.firstValue = result;
      this.display = result?.toString()
  }

  showGame() {
    this.game = !this.game;
  }
}

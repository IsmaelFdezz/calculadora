import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  display: string = '0';
  currentInput: string = '';
  calculation: (number | string)[] = [];
  result: number | null = null;

  game: boolean = false;

  handleNumberInput(num: number) {
    if (this.result !== null) {
      this.result = null;
      this.display = '0';
      this.currentInput = '';
      this.calculation = [];
    }

    this.currentInput += num.toString();
    this.display = this.currentInput;
    console.log('Número seleccionado:', num);
  }

  clear() {
    this.display = '0';
    this.currentInput = '';
    this.calculation = [];
    this.result = null;
    console.log('Limpiando...');
  }

  handleOperation(operation: string) {
    if (this.currentInput !== '') {
      this.calculation.push(parseFloat(this.currentInput));
      this.calculation.push(operation);
      this.currentInput = '';
      console.log('Operación seleccionada:', operation);
    }
  }

  calculate() {
    if (this.currentInput !== '') {
      this.calculation.push(parseFloat(this.currentInput));
      this.currentInput = '';
    }

    let result: number | null = null;
    let operator: string | null = null;

    for (const item of this.calculation) {
      if (typeof item === 'number') {
        if (result === null) {
          result = item;
        } else if (operator !== null) {
          if (operator === '+') {
            result += item;
          } else if (operator === '-') {
            result -= item;
          } else if (operator === 'x') {
            result *= item;
          } else if (operator === '/') {
            result /= item;
          }
        }
      } else if (typeof item === 'string') {
        operator = item;
      }
    }

    if (result !== null) {
      this.display = result.toString();
      this.result = result;
      console.log('Resultado:', result);
    }
  }

  showGame() {
    this.game = !this.game;
    console.log('Mostrando juego...');
  }

  handleGameLost(event: boolean) {
    this.game = false;
  }
}
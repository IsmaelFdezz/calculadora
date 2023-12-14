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

  fart1: HTMLAudioElement = new Audio ('assets/sounds/fart-1.mp3');
  fart2: HTMLAudioElement = new Audio ('assets/sounds/fart-2.mp3');
  fart3: HTMLAudioElement = new Audio ('assets/sounds/fart-3.mp3');
  fart4: HTMLAudioElement = new Audio ('assets/sounds/fart-4.mp3');
  toilet: HTMLAudioElement = new Audio ('assets/sounds/toilet.mp3');
  startGame: HTMLAudioElement = new Audio ('assets/sounds/start-game.mp3');

  game: boolean = false;

  handleNumberInput(num: number) {
    this.fart1.play()

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

  
  handleDecimal() {
    this.fart2.play()

    if (this.result !== null) {
      this.result = null;
      this.display = '0';
      this.currentInput = '';
      this.calculation = [];
    }

    if (this.currentInput.indexOf('.') === -1) {
      if (this.currentInput === '') {
        this.currentInput = '0.';
      } else {
        this.currentInput += '.';
      }
      this.display = this.currentInput;
      console.log('Punto decimal añadido');
    }
  }

  clear() {
    this.toilet.play()

    this.display = '0';
    this.currentInput = '';
    this.calculation = [];
    this.result = null;
    console.log('Limpiando...');
  }

  handleOperation(operation: string) {
    this.fart2.play()

    if (this.currentInput !== '') {
      this.calculation.push(parseFloat(this.currentInput));
      this.calculation.push(operation);
      this.currentInput = '';
      console.log('Operación seleccionada:', operation);
    }
  }

  calculate() {
    this.fart3.play()

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
    this.startGame.play()
    this.game = !this.game;
    console.log('Mostrando juego...');
  }

  handleGameLost(event: boolean) {
    this.game = false;
  }
}
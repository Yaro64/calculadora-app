
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  resultado: number = 0;
  num1: number = 0;
  num2: number = 0;
  operacion: string = '';

  agregarNumero(numero: number) {
    if (this.operacion === '') {
      this.num1 = this.num1 * 10 + numero;
    } else {
      this.num2 = this.num2 * 10 + numero;
    }
  }

  realizarOperacion(operador: string) {
    this.operacion = operador;
  }

  eliminarUltimoDigito() {
    if (this.operacion === '') {
      this.num1 = Math.floor(this.num1 / 10);
    } else {
      this.num2 = Math.floor(this.num2 / 10);
    }
  }

  calcularResultado() {
    switch (this.operacion) {
      case '+':
        this.resultado = this.num1 + this.num2;
        break;
      case '-':
        this.resultado = this.num1 - this.num2;
        break;
      case '*':
        this.resultado = this.num1 * this.num2;
        break;
      case '/':
        this.resultado = this.num1 / this.num2;
        break;
      default:
        this.resultado = 0;
    }


    this.operacion = '';
  }
}

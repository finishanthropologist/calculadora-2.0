import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {
  num1: number = 0;
  num2: number = 0;

  enviarResultado(num1: string, num2: string) {
    this.num1 = parseInt(num1);
    this.num2 = parseInt(num2);

    const resultado = this.num1 + this.num2;
    this.resultado.emit(resultado);
  }


  @Output() resultado = new EventEmitter<number>();
}

import { Component } from '@angular/core';
import { Formulario } from './formulario/formulario';

@Component({
  imports: [Formulario],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {}

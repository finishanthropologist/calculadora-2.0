import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {

  
  @Output() resultado = new EventEmitter<number>();
}

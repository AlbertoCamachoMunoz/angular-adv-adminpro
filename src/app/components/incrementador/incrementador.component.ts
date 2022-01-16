import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Input('valor') progreso : number = 80;
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  get getPorcentaje() {
    return `${ this.progreso }%`;
  }

  cambiarValor(valor: number){
    if(this.progreso >= 100 && valor >= 0)  this.progreso = 100;
    if(this.progreso <= 0 && valor <= 0)    this.progreso = 0;
    

    this.progreso += valor;
    this.valorSalida.emit(this.progreso);
  }

}

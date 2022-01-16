import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('valor') progreso : number = 40;
  @Input() btnClass : string = 'btn-primary';
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

  onChange(valor: number) {
    if(this.progreso >= 100 && valor >= 0)  this.progreso = 100;
    if (this.progreso <= 0 && valor <= 0) this.progreso = 0;
    
    this.valorSalida.emit(this.progreso);
    
  }

}

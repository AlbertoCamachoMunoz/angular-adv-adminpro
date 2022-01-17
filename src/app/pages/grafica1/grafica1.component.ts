import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  // public doughnutChartData: ChartData<'doughnut'> = {
  //   labels: this.doughnutChartLabels,
  //   datasets: [
  //     { data: [ 350, 450, 100 ] }
  //   ]
  // };
  // public doughnutChartType: ChartType = 'doughnut';

  public Title_1: string = 'Ventas';
  public Label_1: string[] = ['Tacos', 'Agua', 'Jamon'];
  
  public Data_1: ChartData<'doughnut'> = {
    labels: this.Label_1,
    datasets: [
      { data: [ 350, 450, 100 ] }
    ]
  };
  public Type_1: ChartType = 'doughnut';

  // // events
  // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

}

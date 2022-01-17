import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() public label_dona: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];;
  @Input() title_dona : string = 'Por defecto';
  @Input() public data_dona: ChartData<'doughnut'> = {
      labels: this.label_dona,
    datasets: [
      { data: [ 350, 450, 100 ] }
    ]
  };

  @Input() public type_dona : ChartType = 'doughnut';
  

  // public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  // public doughnutChartData: ChartData<'doughnut'> = {
  //   labels: this.doughnutChartLabels,
  //   datasets: [
  //     { data: [ 350, 450, 100 ] }
  //   ]
  // };
  // public doughnutChartType: ChartType = 'doughnut';

}

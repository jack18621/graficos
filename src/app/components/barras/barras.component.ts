import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent {

  public barChartOptions: any = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012','2013'];
  public barChartType: string = 'bar';
  public barChartLegend = true;

  
  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 70], label: 'Claudia' },
    { data: [28, 48, 40, 19, 86, 27, 90, 70], label: 'Galan' }
  ];

  
  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }
}


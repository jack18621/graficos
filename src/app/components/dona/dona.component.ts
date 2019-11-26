import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {
  public doughnutChartLabels: string[] = ['Tamales', 'Donnas', 'barrilete'];
  public doughnutChartData: any = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: any = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  random(){
    this.doughnutChartData=[
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100)
    ]
  }
}




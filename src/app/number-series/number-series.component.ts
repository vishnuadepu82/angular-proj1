import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent implements OnInit {
lb:number;
ub:number;
isEven:boolean;
isSqard:boolean;
isDone:boolean;
result:number[];
errMsg:string;
  constructor() { }

  ngOnInit() {
  }
handleSubmit() 
{ }

}
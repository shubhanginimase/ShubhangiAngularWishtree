import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  public no1:number;
  public no2:number;
  public result:number;
  public msg : string;

  addition():void{
    this.result = this.no1 + this.no2;

    this.msg="Result of addition: "+(this.result);

  }

  subtraction():void{
    this.result=this.no1 - this.no2;
    this.msg="Result of subtraction: "+(this.result);
  }

  multiplication():void{
    this.result = this.no1 * this.no2;
    this.msg="Result of multiplication: "+(this.result)
  }
  division():void{
    this.result=this.no1 / this.no2;
    this.msg="Result of division: "+(this.result)
  }

}

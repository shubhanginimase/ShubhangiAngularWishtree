import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() add:EventEmitter<Number> = new EventEmitter<Number>();

 num1:number;
  num2:number;
  //result:number;
  //msg:number;

  onClick():void
  {
    this.add.emit(this.num1+this.num2);
    //this.result=this.num1+this.num2;
    //console.log("Result: "+result);
    //this.msg=this.num1+this.num2;
    //return this.result;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

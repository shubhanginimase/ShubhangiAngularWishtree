import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  title:"Two way data binding";
  ename:string="Shubhangi Nimase";

  constructor() { }

  ngOnInit(): void {
  }

  msg :string="";
showMsg():void
{
  this.msg="Good evening "+this.ename;
}

}

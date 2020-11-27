import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  message:string;
  amount :number;
  todayDate:Date;


  constructor() { 
    this.message="Hello angular pipe demo..";
    this.amount=100;
    this.todayDate=new Date();
  }

  ngOnInit(): void {
  }

}

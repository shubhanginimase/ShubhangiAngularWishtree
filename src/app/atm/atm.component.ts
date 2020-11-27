import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public amt:number;
  public balance:number=50000;
  public msg:string;

  withdraw():void{
    if(this.amt > this.balance)
    {
      this.msg="Insufficient balance....";
    }
    else
    {
      this.balance = this.balance - this.amt;
      this.msg ="new balance : "+(this.balance);
    }
  }

  deposit():void{
    this.balance = this.balance + (this.amt);
    this.msg = "updated balance : "+ (Number)(this.balance);
  }

}

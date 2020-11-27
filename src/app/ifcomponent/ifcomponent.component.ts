import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';

@Component({
  selector: 'app-ifcomponent',
  templateUrl: './ifcomponent.component.html',
  styleUrls: ['./ifcomponent.component.css']
})
export class IfcomponentComponent implements OnInit {

  appTitle:string="Welcome to";
  status:boolean=true;

  flag1 : boolean =true;
  emp=new Employee(1,'Abcd Patil',40000);

  arr:number[]=[10,20,30,25];

  arrString :string[] = ["Java","Angular","Typescript","Python"];

  // person:any=[
  //   pid:101;
  //   pname:"AAAA";

  //   flat:
  //   [
  //     {flatid:1},
  //     {flatid:100},
  //     {flatid:200}
  //   ]
  // ]

  ngOnInit()
  {
    
  }

}

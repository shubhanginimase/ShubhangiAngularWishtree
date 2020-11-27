import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  message:string="on way ...hellooooo";
  name:string;

  path:string="./assets/img.jpg";

  constructor() { 
    this.name="Shubhangi";
  }

  ngOnInit(): void {
  }

  getData():string
  {
    return "Data binding..";
  }

}

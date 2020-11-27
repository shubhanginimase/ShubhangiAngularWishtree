import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-pipe-demo',
  templateUrl: './cust-pipe-demo.component.html',
  styleUrls: ['./cust-pipe-demo.component.css']
})
export class CustPipeDemoComponent implements OnInit {
  employee:any[];

  constructor() {
    this.employee=[
      {employee_id:101,employee_name:'Raj',gender:'male',salary:40000,Designation:'Developer',yrofexp:5},
      {employee_id:102,employee_name:'Riya',gender:'female',salary:45000,Designation:'Manager',yrofexp:15},
      {employee_id:103,employee_name:'Diya',gender:'femlae',salary:35000,Designation:'MAnager',yrofexp:10},
      {employee_id:104,employee_name:'Jay',gender:'male',salary:40000,Designation:'Developer',yrofexp:5}
    ]
   }

  ngOnInit(): void {
  }

}

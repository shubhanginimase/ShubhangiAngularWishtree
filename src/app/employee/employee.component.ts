import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class employeeeComponent implements OnInit {

  employee : any;
    searchText:string;

    constructor()
    {
      this.employee=[
        {
          code:"emp101",name:"emp11",gender:"Male",
          annualSalary:40000,dateOfBirth:"28/04/1997",fulltime:true
        },

        {
          code:"emp102",name:"emp12",gender:"Female",
          annualSalary:30000,dateOfBirth:"30/04/1997",fulltime:true
        },

        {
          code:"emp103",name:"emp13",gender:"Male",
          annualSalary:45000,dateOfBirth:"28/05/1997",fulltime:true
        }
      ];
    }
ngOnInit()
{
  
}  
}

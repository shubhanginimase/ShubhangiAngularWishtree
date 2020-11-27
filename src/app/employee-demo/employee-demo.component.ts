import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-demo',
  templateUrl: './employee-demo.component.html',
  styleUrls: ['./employee-demo.component.css']
})


export class EmployeeDemoComponent implements OnInit {

/* message:string="Welcome ";
  name:string;  
  path:string="./assets/Camera.jpg";
  isdisabled=false;
  city:string;
   */constructor() { 
  //  this.name="Riya";
  }

  ngOnInit(): void {
  }

/* getData():string
{
  return "Data Binding";
}
getCity(city:string)
{
this.city=city;
alert(this.city);
console.log(this.city);
} */
/* name:string='Riya';
classtoapply:string="italicClass boldClass colorClass";
isapply=true;
isBold:boolean=true;
isItalic:boolean=true;
isItalic1:boolean=false;
fontsize:number=20;
ncolor:string='blue';
applyChange()
{
let classes={
  boldClass:this.isBold,
  italicClass:this.isItalic,
  colorClass:this.fontsize,
}
return classes;
}
applyStyle()
{
  let style=
  {
    'font-weight':this.isBold?'bold':'normal',
    'font-style':this.isItalic?this.isItalic1?'italic':'oblique':'normal',
    'font-size.px':this.fontsize,
    'color':this.ncolor,
  }
  return style;
} */
  show:boolean=true;
  age:number=20;
}
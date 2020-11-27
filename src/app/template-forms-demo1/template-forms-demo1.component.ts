import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms-demo1',
  templateUrl: './template-forms-demo1.component.html',
  styleUrls: ['./template-forms-demo1.component.css']
})
export class TemplateFormsDemo1Component implements OnInit
 {

  constructor() { }

  ngOnInit(): void {
  }

  value:any;

  logForm(value:any)
  {
    this.value=this.value;
  }

}

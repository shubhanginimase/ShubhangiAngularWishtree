import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.css']
})
export class ChildDemoComponent implements OnInit {

 // loggedin:false;
  @Input() loggedin:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

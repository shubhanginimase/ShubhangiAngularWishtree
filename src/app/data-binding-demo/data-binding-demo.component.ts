import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.css']
})
export class DataBindingDemoComponent implements OnInit {
    title="DataBinding Demo";
    flag: boolean=true;

    website={
      name:'Technosolutions',
      url:'http://www.TechnoloSolutions.com',
      logo:'img.jpg',
      description:'this is description of the site'
    }

  constructor() { }

  ngOnInit(): void {
  }

}

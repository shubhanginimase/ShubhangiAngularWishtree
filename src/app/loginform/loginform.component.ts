import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent  {
  constructor() { }
  ngOnInit(): void {}
  title="First Template driven forms";
  countryList:country[]=
  [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England') 
  ];
 
  onSubmit(contactForm) {
    console.log(contactForm.value);
  }
 
}
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }

}

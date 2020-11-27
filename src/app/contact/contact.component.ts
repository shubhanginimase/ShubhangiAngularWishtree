import { Component, OnInit } from '@angular/core';
import { contact } from '../valid-form/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  value: any;
  contact: contact = {
    firstname: "Ganesha",
    lastname: "Omkara",
    city: "heavens", 
    street: "Ganesh Nagar", 
    pincode: "400050"
  };

  logForm(fvalue: any) {
    this.value = fvalue;
    console.log(fvalue);
  }

  
}

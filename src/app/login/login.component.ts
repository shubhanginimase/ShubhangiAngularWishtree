import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  name : string="";
  pass : string="";

  email : string="shubh@gmail.com";
  password : string="shubh";

  msg:string;

  cheak():void
  {
    if(this.name == this.email && this.pass == this.password)
    {
      this.msg="Valid user...";
    }
    else{
      this.msg="Invalid user...";
    }
  }


  ngOnInit(): void {
  }

}

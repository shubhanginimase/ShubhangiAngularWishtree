import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userloggedin = true;
  title = 'MyDreamApp';
  ename:string="Shubhangi Nimase";
  eid:number=101;
}


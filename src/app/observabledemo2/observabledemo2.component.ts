import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observabledemo2',
  template: `
	  <b>Angular Component Using Observables!</b>
	 
	  <h6 style="margin-bottom: 0">VALUES:</h6>
	  <div *ngFor="let value of values">- {{ value }}</div>
	  
	  <h6 style="margin-bottom: 0">STATUS:</h6>
	  <div>{{status}}</div>
	  
	  
	`
  
})
export class Observabledemo2Component implements OnInit {
  data: Observable<number>;
  values: Array<number> = [];
  anyErrors: boolean;
  finished: boolean;
  status:string;
 constructor() {
 }
 
 ngOnInit() {
     this.data = new Observable(observer => {
         setTimeout(() => {
             observer.next(42);
         }, 1000);
         
         setTimeout(() => {
             observer.next(43);
         }, 2000);
         
         setTimeout(() => {
             observer.complete();
         }, 3000);
         
         this.status = "Started";
     });

     let subscription = this.data.forEach(v => this.values.push(v))
       .then(() => this.status = "Ended");
 }

}


import { Component} from '@angular/core';

@Component({
  selector: 'app-checkboxdemo2',
  templateUrl: './checkboxdemo2.component.html',
  styleUrls: ['./checkboxdemo2.component.css']
})
export class Checkboxdemo2Component {

  
  studlist:any;//Just created a list
  total: number;
  constructor()
  {
      this.studlist = [
          {
            sid: 1,name: "Shubahngi",checked:false
          },
          {
            sid: 2,name: "Spana",checked:false
          }
        ];
  }
  onClicked(option, event)
   {
      console.log("event  " + this.studlist.length);
      
      for (var i = 0; i < this.studlist.length; i++)
       {
         
          if (this.studlist[i].id == event.target.value)
           {
              
              this.studlist[i].checked = event.target.checked;
          }
          console.log("after update of checkbox" + this.studlist[i].checked);
  
      }
    
  }
  onSubmit(){
      var sum=0;
      for (var i = 0; i < this.studlist.length; i++)
      {
          if (this.studlist[i].checked)
          {
              sum=sum+this.studlist[i].value;
          }

      }  
      this.total=sum;   
    }
}

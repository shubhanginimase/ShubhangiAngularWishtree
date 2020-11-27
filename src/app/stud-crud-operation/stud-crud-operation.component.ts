import { Component } from '@angular/core';

@Component({
  selector: 'app-stud-crud-operation',
  templateUrl: './stud-crud-operation.component.html',
  styleUrls: ['./stud-crud-operation.component.css']
})
export class StudCrudOperationComponent {
  title:string="StudentComponent"
   
  id:number;
  name:string;
  marks:number;
  grade:string;
  student:any=[];
  selectedIndex:number;
  isEdited:boolean;
  isAdded:boolean=true;
  AddData():void {
      //Array of object
      this.isAdded = true;
      this.student.push({
          "id":this.id,
          "name":this.name,
          "marks":this.marks,
          "grade":this.grade
      });
      this.id=0;
      this.name='';
      this.marks=0;
      this.grade='';
      console.log(this.student.length);
  }

  removeStudent(i){
      this.student.splice(i,1);
  }
  editStudent(i){
      this.isEdited = true;
      this.isAdded = false;
      this.selectedIndex = i;
      this.id = this.student[i].id;
      this.name = this.student[i].name;
      this.marks = this.student[i].marks;
      this.grade = this.student[i].grade;
  }
  updateData(){
      this.isEdited = false;
      this.isAdded = true;
      this.student[this.selectedIndex].id = this.id;
      this.student[this.selectedIndex].name = this.name;
      this.student[this.selectedIndex].marks = this.marks;
      this.student[this.selectedIndex].grade = this.grade;

      this.id=0;
      this.name='';
      this.marks=0;
      this.grade='';
  }
  
}
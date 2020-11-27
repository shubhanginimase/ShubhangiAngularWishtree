import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.css']
})
export class CrudOperationComponent {

  title:string="ProuctComponent"
   
    id:number;
    name:string;
    price:number;
    products:any=[];
    selectedIndex:number;
    isEdited:boolean;
    isAdded:boolean=true;
    AddData():void {
        //Array of object
        this.isAdded = true;
        this.products.push({
            "id":this.id,
            "name":this.name,
            "price":this.price
        });
        this.id=0;
        this.name='';
        this.price=0;
        console.log(this.products.length);
    }
    removeProduct(i){
        this.products.splice(i,1);
    }
    editProduct(i){
        this.isEdited = true;
        this.isAdded = false;
        this.selectedIndex = i;
        this.id = this.products[i].id;
        this.name = this.products[i].name;
        this.price = this.products[i].price;
    }
    updateData(){
        this.isEdited = false;
        this.isAdded = true;
        this.products[this.selectedIndex].id = this.id;
        this.products[this.selectedIndex].name = this.name;
        this.products[this.selectedIndex].price = this.price;

        this.id=0;
        this.name='';
        this.price=0;
    }
    
}

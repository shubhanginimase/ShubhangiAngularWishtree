import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { componentFactoryName } from '@angular/compiler';

import { DeptComponent } from './dept/dept.component';
import { EmpComponent } from './emp/emp.component';
import { SampleComponent } from './sample/sample.component';

import { LoginComponent } from './login/login.component';
import { AtmComponent } from './atm/atm.component';
import { CalculatorComponent } from './calculator/calculator.component';
//import { IfcomponentComponent } from './ifcomponent/ifcomponent.component';
//import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDemoComponent } from './employee-demo/employee-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CustPipeDemoComponent } from './cust-pipe-demo/cust-pipe-demo.component';
import { NamePiopePipe } from './name-piope.pipe';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';
import { MsgComponent } from './msg/msg.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DesignationPipePipe } from './designation-pipe.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChildDemoComponent } from './child-demo/child-demo.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ValidFormComponent } from './valid-form/valid-form.component';
//import { ContactComponent } from './contact/contact.component';
import { ModelContactComponent } from './model-contact/model-contact.component';
import { CheckboxdemoComponent } from './checkboxdemo/checkboxdemo.component';
//import { PersonComponent } from './person/person.component';
//import { CustomvalidComponent } from './customvalid/customvalid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginformComponent } from './loginform/loginform.component';
//import { LoginValidationComponent } from './login-validation/login-validation.component';
import { StudentComponent } from './student/student.component';
import { TemplateFormsDemo1Component } from './template-forms-demo1/template-forms-demo1.component';
import { Checkboxdemo2Component } from './checkboxdemo2/checkboxdemo2.component';
import { CallserviceComponent } from './callservice/callservice.component';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { StudCrudOperationComponent } from './stud-crud-operation/stud-crud-operation.component';
import { ObservabledemoComponent } from './observabledemo/observabledemo.component';
import { Observabledemo2Component } from './observabledemo2/observabledemo2.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    DeptComponent,
    EmpComponent,
    SampleComponent,
    LoginComponent,
    AtmComponent,
    CalculatorComponent,
    //IfcomponentComponent,
  //  EmployeeComponent,
    EmployeeDemoComponent,
    PipeDemoComponent,
    CustPipeDemoComponent,
    NamePiopePipe,
    DataBindingDemoComponent,
    MsgComponent,
    DatabindingComponent,
    DesignationPipePipe,
    ParentComponent,
    ChildComponent,
    ChildDemoComponent,
    ProductComponent,
    ProductDetailComponent,
    ValidFormComponent,
    //ContactComponent,
    ModelContactComponent,
    CheckboxdemoComponent,
   // PersonComponent,
  //  CustomvalidComponent,
    LoginformComponent,
    //LoginValidationComponent,
    StudentComponent,
    TemplateFormsDemo1Component,
    Checkboxdemo2Component,
    CallserviceComponent,
    CrudOperationComponent,
    StudCrudOperationComponent,
    ObservabledemoComponent,
    Observabledemo2Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

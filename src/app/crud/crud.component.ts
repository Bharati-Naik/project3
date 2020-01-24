import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent{

employee=[
  {firstName:"bharati",lastName:"naik",company:"imr",mobileNo:"9449767225"},
  {firstName:"bharati",lastName:"naik",company:"ibm",mobileNo:"9449767225"},
  {firstName:"bharati",lastName:"naik",company:"infosys",mobileNo:"9449767225"},
  {firstName:"bharati",lastName:"naik",company:"ibm",mobileNo:"9449767225"}
];

model:any=[];
msg:any="";

addEmp(){
  this.employee.push(this.model)
  this.model=[];
  this.msg="Data is Succesfully added"
}

deleteEmp(i){
  this.employee.splice(i,1)
  this.msg="Data is Succesfully deleted"

}
myValue;
editEmp(i){
  this.model.firstName=this.employee[i].firstName;
  this.model.lastName=this.employee[i].lastName;
  this.model.company=this.employee[i].company;
  this.model.mobileNo=this.employee[i].mobileNo;
  this.myValue=i;

}
updateEmp(){
  let k=this.myValue;
  for(let l=0;l<=this.employee.length;l++){
    if(l=k){
      this.employee[l]=this.model;
      this.model=[];
      this.msg="data is successfully updated"
    }
  }
}
}

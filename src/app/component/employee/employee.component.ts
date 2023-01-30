import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'; 
import { DialogbodyComponent } from '../dialogbody/dialogbody.component';
import { DialogbodyrejectComponent } from '../dialogbodyreject/dialogbodyreject.component';
import { DialogbodynegotiateComponent } from '../dialogbodynegotiate/dialogbodynegotiate.component';
import { EmployeeService } from 'app/shared/services/employee.service';
@Component({ 
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
employeelist:any=[];
feedbackifnolist:any=[];
candidateexplist: any=[];
  ctcdetailslist: any=[];
  ctchistorylist: any=[];
  comments:any=[];
  row:any;
  

constructor(private employee:EmployeeService,private matDialog:MatDialog){

}
openDialog(){
  this.matDialog.open(DialogbodyComponent,{
    width:'350px',
  
  })
}

openpdf(){

     window.open(this.employeelist[0].concat);
    console.log("button clicked",this.employeelist[0].concat)
}

openDialognegotiate(){
  this.matDialog.open(DialogbodynegotiateComponent,{
    width:'350px',
  
  })
}

openDialogreject(){
  this.matDialog.open(DialogbodyrejectComponent,{
    width:'350px',
  })}
  ngOnInit():  void{
    this.row=localStorage.getItem("rowValue");
this.employee.postEmployeelist().subscribe((response) => {
  console.log("row value",this.row)
  let resp = response[this.row]
  this.employeelist.push(resp)
 console.log("emp list",this.employeelist);
});

this.employee.getfeedbackifnolist().subscribe((response) => {
  this.feedbackifnolist = response;
 console.log(this.feedbackifnolist);
});

this.employee.postcandidateexplist().subscribe((response) => {
  let resp = response[this.row]
  this.candidateexplist.push(resp)
 console.log("emp list",this.candidateexplist);
});

this.employee.postctcdetailslist().subscribe((response) => {
  let resp = response[this.row]
  this.ctcdetailslist.push(resp)
 console.log("emp list",this.ctcdetailslist);
});



this.employee.postctchistorylist().subscribe((response) => {
  this.ctchistorylist = response;
 console.log(this.ctchistorylist);
});  

this.employee.commets().subscribe(data=>this.comments=data);



}
}

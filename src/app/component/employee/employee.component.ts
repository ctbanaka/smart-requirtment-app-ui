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
employeelist:any;
feedbackifnolist:any;
candidateexplist: any;
  ctcdetailslist: any;
  ctchistorylist: any;
  comments:any;
  

constructor(private employee:EmployeeService,private matDialog:MatDialog){

}
openDialog(){
  this.matDialog.open(DialogbodyComponent,{
    width:'350px',
  
  })
}

openpdf(){

     window.open(this.employeelist[0].resume_link);
    console.log("button clicked",this.employeelist[0].resume_link)
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
this.employee.postEmployeelist().subscribe((response) => {
  this.employeelist = response;
  response[0].candidate_detail_id;
 console.log(this.employeelist);
});

this.employee.getfeedbackifnolist().subscribe((response) => {
  this.feedbackifnolist = response;
 console.log(this.feedbackifnolist);
});

this.employee.postcandidateexplist().subscribe((response) => {
  this.candidateexplist = response;
 console.log(this.candidateexplist);
});

this.employee.postctcdetailslist().subscribe((response) => {
  this.ctcdetailslist = response;
 console.log(this.ctcdetailslist);
});



this.employee.getctchistorylist().subscribe((response) => {
  this.ctchistorylist = response;
 console.log(this.ctchistorylist);
});  

this.employee.commets().subscribe(data=>this.comments=data);



}
}

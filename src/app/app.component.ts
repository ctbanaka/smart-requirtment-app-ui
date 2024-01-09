import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeService } from './shared/services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'task1';
  email:string  = ''

  constructor (private data: EmployeeService){

  let a="chowdam-vijaya.kumar@capgemini.com"  
       localStorage.setItem("email", a);  
      this.email=localStorage.getItem("email");
      let checkbody={
       "email":this.email
      };
   this.data.generateToken(checkbody).subscribe((token) => {
          localStorage.setItem("bearer_token",token['token'])        
        })
  }

}

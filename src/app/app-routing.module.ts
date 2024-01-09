import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Card1Component } from './component/card1/card1.component';
import { Card2Component } from './component/card2/card2.component';
import { DonutChartComponent } from './component/donut-chart/donut-chart.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { JoiningbonusComponent } from './component/joiningbonus/joiningbonus.component';
import { MychartComponent } from './component/mychart/mychart.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RejectratioComponent } from './component/rejectratio/rejectratio.component';

const routes: Routes = [
  {path:"",component:NavbarComponent},
  {path:"selectratio",component:MychartComponent},
  {path:"rejectratio",component:RejectratioComponent},

  

{path:"joiningBonus",component:JoiningbonusComponent},
  {path:"team3navbar",component:NavBarComponent},
  {path:"team4navbar",component:EmployeeComponent}
  // {path:"",component:Card2Component},
  // {path:"",component:DonutChartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

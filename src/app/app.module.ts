import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonutChartComponent } from './component/donut-chart/donut-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterComponent } from './component/filter/filter.component';
import { NavbarComponent } from './component/navbar/navbar.component';
// import { Card1Component } from './component/card1/card1.component';
// import { Card2Component } from './component/card2/card2.component';
import { OfferspendingComponent } from './component/offerspending/offerspending.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogbodyComponent } from './component/dialogbody/dialogbody.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DialogbodyrejectComponent } from './component/dialogbodyreject/dialogbodyreject.component';
//import { EmployeeComponent } from './component/employee/employee.component';
import { FooterComponent } from './component/footer/footer.component';
import { RejectratioComponent } from './component/rejectratio/rejectratio.component';
import { MychartComponent } from './component/mychart/mychart.component';
import { DialogbodynegotiateComponent } from './component/dialogbodynegotiate/dialogbodynegotiate.component';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { Card1Component } from './component/card1/card1.component';
import { Card2Component } from './component/card2/card2.component';
import { EmployeeComponent } from './component/employee/employee.component';


@NgModule({
  declarations: [
    AppComponent,
    DonutChartComponent,
    FilterComponent,
    NavbarComponent,
    OfferspendingComponent,
    DialogbodyrejectComponent,
    DialogbodyComponent,
    NavBarComponent,
    FooterComponent,
    RejectratioComponent,
    MychartComponent,
    DialogbodynegotiateComponent,
    Card1Component,
    Card2Component,
    EmployeeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
   

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

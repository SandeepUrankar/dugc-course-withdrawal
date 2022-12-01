import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseWithdrawalComponent } from './course-withdrawal/course-withdrawal.component';
import { CourseWidthdrawalReportComponent } from './course-widthdrawal-report/course-widthdrawal-report.component';
import { CourseWithdrawalApplicationComponent } from './course-withdrawal-application/course-withdrawal-application.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CourseWithdrawalComponent,
    CourseWidthdrawalReportComponent,
    CourseWithdrawalApplicationComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseWidthdrawalReportComponent } from './course-widthdrawal-report/course-widthdrawal-report.component';
import { CourseWithdrawalApplicationComponent } from './course-withdrawal-application/course-withdrawal-application.component';
import { CourseWithdrawalComponent } from './course-withdrawal/course-withdrawal.component';

const routes: Routes = [
  {path:'Home', component: CourseWithdrawalComponent},
  {path:'Application', component: CourseWithdrawalApplicationComponent},
  {path:'Report', component: CourseWidthdrawalReportComponent},
  {path:'',redirectTo:'/Home', pathMatch: 'full'},
  // {path:'**', component: PagenotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

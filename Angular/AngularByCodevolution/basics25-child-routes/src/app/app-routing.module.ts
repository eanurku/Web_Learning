import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentsContactComponent } from './components/departments-contact/departments-contact.component';
import { DepartmentsOverviewComponent } from './components/departments-overview/departments-overview.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/departments-list',pathMatch:'full'},
  {path:'departments-list',component:DepartmentListComponent},
  {
    path:'departments-list/:id',
    component:DepartmentDetailComponent,
    children:[
      {path:'overview',component:DepartmentsOverviewComponent},
      {path:'contact',component:DepartmentsContactComponent}
    ]
    
  },
  {path:'employees',component:EmployeeListComponent},
  {path:'**',component:PageNotFoundComponent}
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

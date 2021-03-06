import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DepartmentsOverviewComponent } from './components/departments-overview/departments-overview.component';
import { DepartmentsContactComponent } from './components/departments-contact/departments-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    DepartmentDetailComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    DepartmentsOverviewComponent,
    DepartmentsContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

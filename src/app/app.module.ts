import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewallComponent } from './viewall/viewall.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';

const myRoutes: Routes = [{
  path:"",component:AddEmployeeComponent
}
,
{
  path:"viewall",component:ViewallComponent
},
{
  path:"search",component:SearchEmployeeComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ViewallComponent,
    NavbarComponent,
    SearchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent }  from '../Component/Employee/EmployeeComponent';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ EmployeeComponent ],
  bootstrap:    [ EmployeeComponent ]
})
export class EmployeeModule { 

}

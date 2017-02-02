import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentComponent }  from '../Component/Student/StudentComponent';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ StudentComponent ],
  bootstrap:    [ StudentComponent ]
})
export class StudentModule { 

}

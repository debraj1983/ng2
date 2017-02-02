import { Component } from "@angular/core"
import { Employee } from "../../Model/EmployeeModel"
import { AppConstant } from "../../AppConstant"



const EMPLOYEES: Employee[] = [
  {EmpID:100001, EmpName:"Debraj Dutta", EmpEmail: "a@company.com", EmpDob: "01/01/1983", EmpAddress: "Bangalore", EmpContact: "9836114767"},
  {EmpID:100002, EmpName:"Debraj Dutta", EmpEmail: "a@company.com", EmpDob: "01/01/1983", EmpAddress: "Bangalore", EmpContact: "9836114767"},
  {EmpID:100003, EmpName:"Debraj Dutta", EmpEmail: "a@company.com", EmpDob: "01/01/1983", EmpAddress: "Bangalore", EmpContact: "9836114767"},
  {EmpID:100004, EmpName:"Debraj Dutta", EmpEmail: "a@company.com", EmpDob: "01/01/1983", EmpAddress: "Bangalore", EmpContact: "9836114767"},
  {EmpID:100005, EmpName:"Debraj Dutta", EmpEmail: "a@company.com", EmpDob: "01/01/1983", EmpAddress: "Bangalore", EmpContact: "9836114767"}
];

@Component({
	selector: "employee-ui",
	templateUrl: AppConstant.COMPONENT_PATH + "Employee/Employee.html"
})

export class EmployeeComponent {
	employees = EMPLOYEES;




}



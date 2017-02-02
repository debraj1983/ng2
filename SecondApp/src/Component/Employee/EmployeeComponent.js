"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppConstant_1 = require("../../AppConstant");
var EMPLOYEES = [
    { EmpID: 100001, EmpName: "Debraj Dutta", EmpEmail: "a@company.com", EmpDob: "01/01/1983", EmpAddress: "Bangalore", EmpContact: "9876543210" },
    { EmpID: 100002, EmpName: "Debraj Dutta", EmpEmail: "a@company.com", EmpDob: "01/01/1983", EmpAddress: "Bangalore", EmpContact: "9876543210" },
    { EmpID: 100003, EmpName: "Debraj Dutta", EmpEmail: "a@company.com", EmpDob: "01/01/1983", EmpAddress: "Bangalore", EmpContact: "9876543210" },
    { EmpID: 100004, EmpName: "Debraj Dutta", EmpEmail: "a@company.com", EmpDob: "01/01/1983", EmpAddress: "Bangalore", EmpContact: "9876543210" },
    { EmpID: 100005, EmpName: "Debraj Dutta", EmpEmail: "a@company.com", EmpDob: "01/01/1983", EmpAddress: "Bangalore", EmpContact: "9876543210" }
];
var EmployeeComponent = (function () {
    function EmployeeComponent() {
        this.employees = EMPLOYEES;
    }
    EmployeeComponent.prototype.selectEmployee = function (employee) {
        this.selectedEmployee = employee;
        this.isSelectedEmployee = !this.isSelectedEmployee;
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: "employee-ui",
            templateUrl: AppConstant_1.AppConstant.COMPONENT_PATH + "Employee/Employee.html",
            styleUrls: [AppConstant_1.AppConstant.COMPONENT_PATH + "Employee/Employee.css"],
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=EmployeeComponent.js.map
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
var StudentModel_1 = require("../../Model/StudentModel");
var AppConstant_1 = require("../../AppConstant");
var StudentComponent = (function () {
    function StudentComponent() {
        this.studentobj = new StudentModel_1.Student();
    }
    StudentComponent = __decorate([
        core_1.Component({
            selector: "student-ui",
            templateUrl: AppConstant_1.AppConstant.COMPONENT_PATH + "Student/Student.html"
        }), 
        __metadata('design:paramtypes', [])
    ], StudentComponent);
    return StudentComponent;
}());
exports.StudentComponent = StudentComponent;
//# sourceMappingURL=StudentComponent.js.map
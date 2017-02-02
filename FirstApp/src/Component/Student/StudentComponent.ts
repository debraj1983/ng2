import { Component } from "@angular/core"
import { Student } from "../../Model/StudentModel"
import { AppConstant } from "../../AppConstant"

@Component({
	selector: "student-ui",
	templateUrl: AppConstant.COMPONENT_PATH + "Student/Student.html"
})

export class StudentComponent {
	studentobj : Student = new Student();
}

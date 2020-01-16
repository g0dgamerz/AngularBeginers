import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.employeeForm = new FormGroup({
    //   fullName: new FormControl(),
    //   email: new FormControl(),
    //   skills: new FormGroup({
    //     skillName: new FormControl(),
    //     experienceInYears: new FormControl(),
    //     proficiency: new FormControl()
    //   })
    // });
    this.employeeForm = this.fb.group({
      fullName: [
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(10)]
      ],
      email: [""],
      skills: this.fb.group({
        skillName: [""],
        experienceInYears: [""],
        proficiency: ["beginner"]
      })
    });
  }
  logKeyValuePairs(group: FormGroup):void {
Object.keys(group.controls).forEach((key: string)=>{
  const abstractControl = group.get(key);
  if(abstractControl instanceof FormGroup){
    this.logKeyValuePairs(abstractControl);
  }
  else {
    console.log('key =' + key + 'value' + abstractControl.value); 
  }
})
  }
  onLoadDataClick(): void {
    // this.employeeForm.setValue({
    //   fullName: "Jidesh baidya",
    //   email: "jideshvaidya@gmail.com",
    //   skills: {
    //     skillName: "C#",
    //     experienceInYears: 1,
    //     proficiency: "beginner"
    //   }
    // });
    this.logKeyValuePairs(this.employeeForm);
  }

  onSubmit(): void {
    console.log(this.employeeForm.value);
  }
}

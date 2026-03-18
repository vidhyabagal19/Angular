import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { error } from 'console';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css',
})
export class StudentDashboardComponent {
  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
  ) {
    this.studentForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
    });
  }

  students: any[] = [];
  filteredData: any[] = [...this.students];

  getStudent() {
    this.students = this.studentService.getStudent();
  }

  AddStudent() {
    if (this.studentForm.valid) {
      this.students = this.studentService.AddStudent(this.studentForm.value);
      this.filteredData = this.students;
      this.studentForm.reset();
    } else {
      console.log('form is invalid');
    }
  }

  DeleteStudent(id: number) {
    this.students = this.studentService.DeleteStudent(this.studentForm.value);
  }

  newData1: any = '';

  EditStudent(id: number) {
    let index = this.students.findIndex((s) => s.id == id);
    let student1 = this.students[index];
    this.studentForm.patchValue(student1);
    this.newData1 = student1;
  }

  UpdateData() {
    this.students = this.studentService.UpdateData(this.studentForm.value);
    console.log(this.studentForm.value);
  }

  
  // let index = this.students.findIndex((s) => s.id == this.newData1.id);
  // this.students[index] = this.studentService.UpdateData(this.studentForm.value)




  // addStudent() {
  //   if (this.studentForm.valid) {
  //     console.log(this.studentForm);
  //     this.students.push(this.studentForm.value);
  //     this.filteredData = this.students;
  //     this.studentForm.reset();
  //   } else {
  //     console.log('form is invalid');
  //   }
  // }

  // deleteStudent(id: number) {
  //   console.log(id);
  //   let index = this.students.findIndex((s) => s.id == id);
  //   console.log(index);
  //   this.students.splice(index, 1);
  // }
}

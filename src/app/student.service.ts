import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  studentData: any[] = [
    {
      id: '1',
      name: 'Vidhya',
      email: 'vidhya@gmail.com',
      course: 'Computer Engineering',
      age: 22,
    },
    {
      id: '2',
      name: 'Sakshi',
      email: 'sakshi@gmail.com',
      course: 'Information Technology',
      age: 21,
    },
    {
      id: '3',
      name: 'Vaibhav',
      email: 'vaibhav@gmail.com',
      course: 'Mechanical Engineering',
      age: 23,
    },
    {
      id: '4',
      name: 'Rahul',
      email: 'rahul@gmail.com',
      course: 'Civil Engineering',
      age: 24,
    },
  ];
  
  constructor() {}

  getStudent() {
    return this.studentData;
  }

  AddStudent(student: any) {
    this.studentData.push(student);
    return this.studentData;
  }

  DeleteStudent(id: number) {
    let index = this.studentData.findIndex((s) => s.id == id);
    this.studentData.splice(index, 1);
    return this.studentData;
  }

  
  UpdateData(updtstudent: any) {
    console.log('updated datz:', updtstudent);

    let index = this.studentData.findIndex((s) => s.id == updtstudent.id);
    console.log('index', index);

    this.studentData[index] = updtstudent;
    return this.studentData;
  }
}

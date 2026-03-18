import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  @Input() studentData: any[] = [];

  @Input() filteredData:any [] = [];

  @Output() removeStudent = new EventEmitter();

  @Output() editStudent = new EventEmitter();

  DeleteStudent(id: string) {
    this.removeStudent.emit(id);
  }

  EditStudent(id: string){
    this.editStudent.emit(id)
  }


  searchname: any = '';

  searchStudent(text: string) {

    if (text.trim() == '') {
      this.filteredData = this.studentData;
      return;
    }

    text = this.searchname.trim().toLowerCase();

    let searchedNm = this.filteredData.filter((s) =>
      s.name.trim().toLowerCase().includes(text) || 
      s.course.trim().toLowerCase().includes(text) 
    );

    console.log(searchedNm);
    this.filteredData = searchedNm;
  }


  get searchData(){
    if(this.searchname.trim() == ""){
      return this.studentData;
    }

    return this.studentData.filter(s => s.name.toLowerCase().includes(this.searchname) || s.course.toLowerCase().includes(this.searchname))
  }
}

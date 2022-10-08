import { Component, OnInit } from '@angular/core';
interface userCourse {
  name : string ;
  content : string  ; 
  rating  ?: any ;
}
@Component({
  selector: 'app-infor-course',
  templateUrl: './infor-course.component.html',
  styleUrls: ['./infor-course.component.css']
})
export class InforCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 
  listOfData: userCourse[] = [
    {
      name: 'John Brown',
      content : 'Tiếng Nhật',
      rating : 4.5 
    },
    {
  
      name: 'Jim Green',
      content : 'Tiếng Nhật',
  rating : 4.5 
    },
    {

      name: 'Joe Black',
      content : 'Tiếng Nhật',
  rating : 4.5 
    }
  ];
}

import { Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';
interface courseList {
  courseName : string ; 
  courseContent : string ;
  courseTotal : number ;
  courseAuthor : string ;
}
@Component({
  selector: 'app-my-wordbooks',
  templateUrl: './my-wordbooks.component.html',
  styleUrls: ['./my-wordbooks.component.css']
})
export class MyWordbooksComponent implements OnInit {

  constructor() { }
  hGutter = 16;
  vGutter = 16;
  count = 3;
  array = new Array(this.count);
  userCourseDetail : courseList[] = [{
    courseName : 'Minna ni hongo' ,
    courseContent : "すみません" ,
    courseTotal : 20  , 
    courseAuthor : 'Huy Tuấn' 
  },
  {
    courseName : 'Minna ni hongo' ,
    courseContent : "すみません" ,
    courseTotal : 20  , 
    courseAuthor : 'Huy Tuấn' 
  },
  {
    courseName : 'Minna ni hongo' ,
    courseContent : "すみません" ,
    courseTotal : 20  , 
    courseAuthor : 'Huy Tuấn' 
  },
]
  ngOnInit(): void {
  }

}

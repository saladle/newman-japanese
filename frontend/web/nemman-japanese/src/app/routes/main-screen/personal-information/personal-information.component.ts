import { Component, OnInit } from '@angular/core';
interface user {
  name : string ; 
  content ?: string ;
  rating ?: any
}
@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // userInfo : user[]  =[ {
    //   name  : 'Tạ Huy Tuấn' ,
    //   content : 'Japan' , 
    //   rating : 4.5 
    // }]
  }

}

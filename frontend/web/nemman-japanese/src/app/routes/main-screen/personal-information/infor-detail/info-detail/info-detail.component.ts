import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
interface user {
  name : string ,
  roll ?: string ,
  userEmail ?: string , 
  userPassword ? : string
}
@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.css']
})
export class InfoDetailComponent implements OnInit {
  UserForm!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}

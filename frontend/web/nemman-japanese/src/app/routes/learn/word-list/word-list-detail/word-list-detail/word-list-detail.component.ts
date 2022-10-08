import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-list-detail',
  templateUrl: './word-list-detail.component.html',
  styleUrls: ['./word-list-detail.component.css']
})
export class WordListDetailComponent implements OnInit {
  @Input() dataClick : any ;
  thisData: any;
  constructor() { }

  ngOnInit(): void {
   
  }
  
}

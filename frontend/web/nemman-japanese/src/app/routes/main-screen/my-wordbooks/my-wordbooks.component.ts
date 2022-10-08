import { Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';

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
  marksHGutter: NzMarks = {
    8: '8',
    16: '16',
    24: '24',
    32: '32',
    40: '40',
    48: '48'
  };
  marksVGutter: NzMarks = {
    8: '8',
    16: '16',
    24: '24',
    32: '32',
    40: '40',
    48: '48'
  };
  marksCount: NzMarks = {
    2: '2',
    3: '3',
    4: '4',
    6: '6',
    8: '8',
    12: '12'
  };
  reGenerateArray(count: number): void {
    this.array = new Array(count);
  }
  ngOnInit(): void {
  }

}

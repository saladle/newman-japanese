import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
})
export class AnalysisComponent implements OnInit {
  listAchievement: any = [
    {
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/5455/5455914.png',
      name: 'Chuỗi 3 ngày',
      date: '12/09/2022',
    },
    {
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/1835/1835046.png',
      name: 'Chuỗi 5 ngày',
      date: '14/09/2022',
    },
    {
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/3021/3021600.png',
      name: 'Chuỗi 7 ngày',
      date: '16/09/2022',
    },
    {
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/1834/1834988.png',
      name: 'Chuỗi 10 ngày',
      date: '19/09/2022',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  listRankUser: any = [
    {
      rank: 1,
      avatar: 'https://i.postimg.cc/Z5wQKJmh/fchunters.png',
      name: 'Lê Đức Huy',
      word: 120,
    },
    {
      rank: 2,
      avatar: 'https://i.postimg.cc/Z5wQKJmh/fchunters.png',
      name: 'Phạm Nhật Huy',
      word: 110,
    },
    {
      rank: 3,
      avatar: 'https://i.postimg.cc/Z5wQKJmh/fchunters.png',
      name: 'Tạ Huy',
      word: 100,
    },
    {
      rank: 4,
      avatar: 'https://i.postimg.cc/Z5wQKJmh/fchunters.png',
      name: 'Hoàng Việt Huy',
      word: 10,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

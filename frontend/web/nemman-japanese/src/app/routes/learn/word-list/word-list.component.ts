import { WordbookService } from './../../../services/wordbook-management/wordbook.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { constant } from 'src/app/utils/constant';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css'],
})
export class WordListComponent implements OnInit {
  thisWordBook: any;
  listOfData: any = [
    {
      key: '1',
      name: '皆さんこんにちは',
      age: 'xin chào mọi người',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'こんばんは',
      age: 'chào buổi tối',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  constructor(
    private router: ActivatedRoute,
    private wordbookService: WordbookService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    console.log(this.router.snapshot.params.id);
    if (this.router.snapshot.params.id) {
      var response = await this.wordbookService
        .getWordbookById(this.router.snapshot.params.id)
        .toPromise();
      this.thisWordBook = response;
    } else {
      var cachedWordBook = localStorage.getItem(constant.CACHE_WORDBOOK_LABEL);
      if (cachedWordBook) {
        this.thisWordBook = JSON.parse(cachedWordBook);
      }
    }
  }
}

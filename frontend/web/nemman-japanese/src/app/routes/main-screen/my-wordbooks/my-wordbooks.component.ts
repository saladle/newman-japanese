import { staticPath } from './../../../utils/staticPath';
import { WordbookService } from './../../../services/wordbook-management/wordbook.service';
import { Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';
import { Router } from '@angular/router';
import { constant } from 'src/app/utils/constant';
interface courseList {
  courseName: string;
  courseContent: string;
  courseTotal: number;
  courseAuthor: string;
}
@Component({
  selector: 'app-my-wordbooks',
  templateUrl: './my-wordbooks.component.html',
  styleUrls: ['./my-wordbooks.component.css'],
})
export class MyWordbooksComponent implements OnInit {
  allWordBook: any = [];

  constructor(
    private router: Router,
    private wordbookService: WordbookService
  ) {}
  hGutter = 16;
  vGutter = 16;
  count = 3;
  array = new Array(this.count);
  userCourseDetail: courseList[] = [
    {
      courseName: 'Minna ni hongo',
      courseContent: 'すみません',
      courseTotal: 20,
      courseAuthor: 'Huy Tuấn',
    },
    {
      courseName: 'Minna ni hongo',
      courseContent: 'すみません',
      courseTotal: 20,
      courseAuthor: 'Huy Tuấn',
    },
    {
      courseName: 'Minna ni hongo',
      courseContent: 'すみません',
      courseTotal: 20,
      courseAuthor: 'Huy Tuấn',
    },
  ];
  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    await this.getAllWordBook();
  }

  async getAllWordBook() {
    var response = await this.wordbookService.getAllWordbook().toPromise();
    this.allWordBook = response;
    console.log('this.allMatches');
    console.log(this.allWordBook);
    console.log(this.allWordBook[0]);
  }

  goToDetailWord(wordBook: any): any {
    var id = wordBook.id;
    this.router.navigate([`/${staticPath.WORD_LIST}`, { id }]);
    this.wordbookService.setCurrentWordBook(wordBook);
    this.saveDataCache(constant.CACHE_WORDBOOK_LABEL, wordBook);
  }

  saveDataCache(label: string, data: any) {
    localStorage.setItem(label, JSON.stringify(data));
  }
}

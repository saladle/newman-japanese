import { WordbookService } from './../../../services/wordbook-management/wordbook.service';
import { Component, OnInit } from '@angular/core';
import { constant } from 'src/app/utils/constant';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css'],
})
export class WordDetailComponent implements OnInit {
  currentWordBook: any;
  currentWordIndex: number = 0;
  listSortedWord: any[] = [];
  date: any = new Date().toISOString();
  constructor(private wordbookService: WordbookService) {}

  ngOnInit(): void {
    var cachedWordBook = localStorage.getItem(constant.CACHE_WORDBOOK_LABEL);

    if (cachedWordBook) {
      this.currentWordBook = JSON.parse(cachedWordBook);
    } else {
      this.currentWordBook = this.wordbookService.currentWordBook;
    }
    this.getListSorted();
  }

  getListSorted() {
    this.currentWordBook.wordList.forEach((element: any) => {
      console.log('huy tesstt');

      console.log(element.lastLearnAt);
      console.log(this.date);
      if (element.lastLearnAt > this.date) {
        console.log('lastLearnAt lon hon');
      } else if (element.lastLearnAt == this.date) {
        console.log('bang nhau');
      } else {
        console.log('today lon hon');
      }
    });
  }

  onClickNext() {
    this.currentWordIndex++;
  }
}

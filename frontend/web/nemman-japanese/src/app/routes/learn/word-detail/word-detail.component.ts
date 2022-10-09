import { WordListComponent } from './../word-list/word-list.component';
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
  editingWordBook: any;
  currentWordIndex: number = 0;
  listSortedWord: any[] = [];
  hideResultMode: boolean = true;
  autoReview: boolean = false;
  isShowResult: boolean = false;
  date: any = new Date().toISOString();
  constructor(private wordbookService: WordbookService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    var cachedWordBook = localStorage.getItem(constant.CACHE_WORDBOOK_LABEL);

    if (cachedWordBook) {
      this.currentWordBook = JSON.parse(cachedWordBook);
    } else {
      this.currentWordBook = this.wordbookService.currentWordBook;
    }
    this.editingWordBook = Object.assign([], this.currentWordBook);
    this.getListSorted();

    this.listSortedWord = this.currentWordBook.wordList.sort(
      (n1: any, n2: any) => {
        if (n1.lastLearnAt > n2.lastLearnAt) {
          return 1;
        }

        if (n1.lastLearnAt < n2.lastLearnAt) {
          return -1;
        }

        return 0;
      }
    );
    console.log(this.listSortedWord);
  }

  getListSorted() {
    this.currentWordBook.wordList.forEach((element: any) => {
      console.log(element.lastLearnAt);
      console.log(this.date);
      if (element.lastLearnAt > this.date) {
        console.log('lastLearnAt lon hon');
      } else {
        console.log('today lon hon');
      }
    });
  }

  // updateWordBook() {
  //   this.wordbookService.updateWorkBook(this.currentWordBook.id);
  // }

  async onClickReaction(wordId: any, level: number) {
    this.editingWordBook.wordList.forEach((element: any) =>
      console.log(element.id)
    );
    var thisWord = this.editingWordBook.wordList.findIndex(
      (element: any) => element.id == wordId
    );
    console.log(thisWord);
    this.currentWordIndex++;
    this.isShowResult = false;
  }

  onClickNext() {
    this.currentWordIndex++;
  }

  onClickShowResult() {
    if (this.isShowResult) {
      this.isShowResult = false;
    } else {
      this.isShowResult = true;
    }
  }
}

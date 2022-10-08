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
  constructor(private wordbookService: WordbookService) {}

  ngOnInit(): void {
    var cachedWordBook = localStorage.getItem(constant.CACHE_WORDBOOK_LABEL);
    console.log('huy test cache');
    console.log(cachedWordBook);

    if (cachedWordBook) {
      this.currentWordBook = JSON.parse(cachedWordBook);
    } else {
      this.currentWordBook = this.wordbookService.currentWordBook;
    }
    console.log(this.currentWordBook);
  }
}

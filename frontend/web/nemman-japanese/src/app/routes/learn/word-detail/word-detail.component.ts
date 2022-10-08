import { WordbookService } from './../../../services/wordbook-management/wordbook.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css'],
})
export class WordDetailComponent implements OnInit {
  currentWordBook: any;
  constructor(private wordbookService: WordbookService) {}

  ngOnInit(): void {
    this.currentWordBook = this.wordbookService.currentWordBook;
    console.log(this.currentWordBook);
  }
}

import { WordbookService } from './../../../services/wordbook-management/wordbook.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { staticPath } from 'src/app/utils/staticPath';

@Component({
  selector: 'app-created-wordbooks',
  templateUrl: './created-wordbooks.component.html',
  styleUrls: ['./created-wordbooks.component.css'],
})
export class CreatedWordbooksComponent implements OnInit {
  allWordBook: any = [];

  constructor(
    private router: Router,
    private wordbookService: WordbookService
  ) {}
  hGutter = 16;
  vGutter = 16;
  count = 3;
  array = new Array(this.count);

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
    // this.saveDataCache(constant.CACHE_WORDBOOK_LABEL, wordBook);
  }

  saveDataCache(label: string, data: any) {
    localStorage.setItem(label, JSON.stringify(data));
  }
}

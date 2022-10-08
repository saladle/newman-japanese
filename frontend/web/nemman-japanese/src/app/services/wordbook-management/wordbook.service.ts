import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from 'src/app/utils/constant';

@Injectable({
  providedIn: 'root',
})
export class WordbookService {
  currentWordBook: any;
  baseUrl: string = 'https://632d24b2519d17fb53b8943d.mockapi.io/word-books';

  constructor(private http: HttpClient) {}

  getAllWordbook() {
    return this.http.get(this.baseUrl);
  }

  getWordbookById(id: any) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  setCurrentWordBook(data: any): void {
    this.currentWordBook = data;
    this.saveDataCache(constant.CACHE_WORDBOOK_LABEL, data);
  }
  saveDataCache(label: string, data: any) {
    localStorage.setItem(label, JSON.stringify(data));
  }
}

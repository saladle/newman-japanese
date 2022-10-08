import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  }
}

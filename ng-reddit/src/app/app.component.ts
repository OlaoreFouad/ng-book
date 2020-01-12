import { Article } from './models/article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  articles: Article[];

  constructor() {  }

  addArticle(newtitle: HTMLInputElement, newlink: HTMLInputElement) {
    const article = new Article(newtitle.value, newlink.value, 0);
    this.articles.push(article);
    newtitle.value = ''; newlink.value = '';

    return false;
  }

  sortedArticles() {
    return this.articles.sort((a, b) => b.votes - a.votes);
  }

  ngOnInit(): void {
    this.articles = [
      new Article('Angular 2', 'https://angular.io/ng2', 10),
      new Article('Success For Teens', 'https://successforteens.com/ebay', 2),
      new Article('7 Habits of highly effective teens.', 'https://bored.io/content', 5)
    ];
  }
}

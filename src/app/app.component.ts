import { Component } from '@angular/core';
import {Article} from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles : Article[]; // component property

  // constructor
  constructor(){
    this.articles = [
      new Article('Angular', 'http://angular.io', 9),
      new Article('Vue', 'http://vue.io', 5),
      new Article('React', 'http://react.io', 7),
    ];
  }

  addArticle(title : HTMLInputElement, link : HTMLInputElement) : boolean {
    console.log(`Adding article title : ${title.value} and link : ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));

    // untuk clear the input field values
    title.value = '';
    link.value = '';
    return false;
  }

  // mengurutkan artikel dengan vote tinggi diatas, dan vote rendah di bawah
  sortedArticles() : Article [] {
    return this.articles.sort((a : Article, b : Article) => b.votes - a.votes);
  }
}

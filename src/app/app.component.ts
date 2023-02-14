import { Component } from '@angular/core';
import {NewsService} from "./services/newsService";
import {News, Res} from "./models/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-frontend';
  news!: News[];

  constructor(private newsService: NewsService) {
    this.newsService.getAll().subscribe((data: Res) => {
      this.news = data.news;
    })
  }

  search(event: string): void {
    this.newsService.getByKeywords(event).subscribe((data: News[]) => {
      this.news = data;
    })
  }
}

import {Component, Input, OnInit} from '@angular/core';
import { NewsService } from "../../services/newsService";
import {News, Res} from "../../models/model";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @Input() news!: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {

  }

}

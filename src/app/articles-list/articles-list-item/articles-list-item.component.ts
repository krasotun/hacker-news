import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IArticle } from 'src/app/model/article.model';

@Component({
  selector: 'app-articles-list-item',
  templateUrl: './articles-list-item.component.html',
  styleUrls: ['./articles-list-item.component.scss'],
})
export class ArticlesListItemComponent {
  constructor(private _router: Router) {}
  @Input()
  article!: IArticle;
  @Input()
  indexNumber!: number;
}

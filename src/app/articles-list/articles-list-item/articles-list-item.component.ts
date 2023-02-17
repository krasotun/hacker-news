import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IArticle } from 'src/app/model/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles-list-item',
  templateUrl: './articles-list-item.component.html',
  styleUrls: ['./articles-list-item.component.scss'],
})
export class ArticlesListItemComponent {
  constructor(private _articlesService: ArticleService) {}
  @Input()
  article!: IArticle;
  @Input()
  indexNumber!: number;

  onClick(id: number) {
    this._articlesService.setActiveArticle(id);
  }
}

import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  constructor(private _articlesService: ArticleService) {}
  article$ = this._articlesService.activeArticle$;
}

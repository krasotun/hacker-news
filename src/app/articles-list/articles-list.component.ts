import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { map } from 'rxjs/operators';
import { IArticle } from '../model/article.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent {
  constructor(private _articleService: ArticleService) {}
  articles$ = this._articleService.getData().pipe(map((data) => data.hits));
}

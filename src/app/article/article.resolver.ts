import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IArticle } from '../model/article.model';
import { ArticleService } from '../services/article.service';

@Injectable({ providedIn: 'root' })
export class ArticleResolver implements Resolve<IArticle | undefined> {
  constructor(private _articleService: ArticleService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<IArticle | undefined> {
    const id = route.paramMap.get('id');
    if (id) {
      return this._articleService.getArticleById(id);
    }
    return of(undefined);
  }
}

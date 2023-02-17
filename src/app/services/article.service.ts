import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { catchError, Observable, of, Subject, takeUntil } from 'rxjs';
import { API_DATA } from '../data/api.data';
import { IArticle } from '../model/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService implements OnDestroy {
  constructor(private _httpClient: HttpClient) {}

  private readonly _destroySubject = new Subject<void>();
  private readonly _activeArticleSubject = new Subject<IArticle>();

  readonly activeArticle$ = this._activeArticleSubject.pipe(
    takeUntil(this._destroySubject)
  );

  private _getArticleById(id: number): Observable<IArticle> {
    return this._httpClient
      .get<IArticle>(`${API_DATA.BASE_URL}${API_DATA.GET_ITEMS}${id}`)
      .pipe(
        catchError((error) => {
          console.log(error);
          return of(error);
        })
      );
  }

  setActiveArticle(id: number): void {
    this._getArticleById(id).subscribe((article) => {
      this._activeArticleSubject.next(article);
    });
  }

  getData() {
    return this._httpClient
      .get(
        `${API_DATA.BASE_URL}/${API_DATA.SEARCH_PARAMS.SEARCH_BY_TAG}${API_DATA.TAGS.FRONT_PAGE}`
      )
      .pipe(
        catchError((error) => {
          console.log(error);
          return of(error);
        })
      );
  }

  ngOnDestroy(): void {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
}

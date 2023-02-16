import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { IArticle } from '../model/article.model';
import { HttpClient } from '@angular/common/http';
import { API_DATA } from '../data/api.data';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private _httpClient: HttpClient) {}

  getArticles(): Observable<IArticle[]> {
    return this._httpClient
      .get<IArticle[]>(
        `${API_DATA.BASE_URL}/${API_DATA.SEARCH_PARAMS.SEARCH_BY_TAG}${API_DATA.TAGS.FRONT_PAGE}`
      )
      .pipe(
        catchError((error) => {
          console.log(error);
          return of(error);
        })
      );
  }
}

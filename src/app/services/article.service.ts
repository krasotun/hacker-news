import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { API_DATA } from '../data/api.data';
import { IArticle } from '../model/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private _httpClient: HttpClient) {}

  getArticleById(id: string): Observable<IArticle> {
    return this._httpClient
      .get<IArticle>(`${API_DATA.BASE_URL}${API_DATA.GET_ITEMS}${id}`)
      .pipe(
        catchError((error) => {
          console.log(error);
          return of(error);
        })
      );
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
}

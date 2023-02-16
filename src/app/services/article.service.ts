import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { API_DATA } from '../data/api.data';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private _httpClient: HttpClient) {}

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

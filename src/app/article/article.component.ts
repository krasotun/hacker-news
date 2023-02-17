import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { IArticle } from '../model/article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  article$: Observable<IArticle | undefined>;
  constructor(private _activatedRoute: ActivatedRoute) {
    this.article$ = this._activatedRoute.data.pipe(
      map((data) => data['article'])
    );
  }
}

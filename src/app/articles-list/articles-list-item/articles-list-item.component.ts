import { Component, Input } from '@angular/core';
import { IArticle } from 'src/app/model/article.model';

@Component({
  selector: 'app-articles-list-item',
  templateUrl: './articles-list-item.component.html',
  styleUrls: ['./articles-list-item.component.scss'],
})
export class ArticlesListItemComponent {
  @Input()
  article!: IArticle;
  @Input()
  indexNumber!: number;
}

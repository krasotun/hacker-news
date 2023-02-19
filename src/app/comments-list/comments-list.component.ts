import { Component, Input } from '@angular/core';
import { IComment } from '../model/comment.model';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
})
export class CommentsListComponent {
  @Input()
  comments!: IComment[];
}

import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/model/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  @Input()
  comment!: IComment;
}

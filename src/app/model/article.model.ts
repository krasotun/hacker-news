import { IComment } from './comment.model';

export interface IArticle {
  id: number;
  author: string;
  title: string;
  url: string;
  points: number;
  num_comments: string;
  children: IComment[] | [];
}

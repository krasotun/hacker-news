import { IComment } from './comment.model';
export interface IArticle {
  objectID: string;
  author: string;
  title: string;
  url: string;
  points: number;
  num_comments: string;
  children: IComment[] | [];
}

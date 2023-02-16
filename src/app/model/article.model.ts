import { IComment } from './comment.model';

export interface IArticle {
  id: number;
  author: string;
  url: string;
  points: number;
  children: IComment[] | [];
}

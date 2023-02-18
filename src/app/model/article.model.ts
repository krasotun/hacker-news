import { IComment } from './comment.model';
export interface IArticle {
  objectID: string;
  author: string;
  title: string;
  url: string;
  text: string | null;
  points: number;
  num_comments: string;
  children: IComment[] | [];
}

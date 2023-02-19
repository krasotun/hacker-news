export interface IComment {
  author: string;
  text: string;
  children: IComment[] | [];
}

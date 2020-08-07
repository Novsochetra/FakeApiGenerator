import { IPost } from "./interface";

class Post {
  _id: number;
  _userId: number;
  _title: string;
  _body: string;

  constructor({ id, userId, body, title }: IPost) {
    this._id = id;
    this._body = body;
    this._title = title;
    this._userId = userId;
  }

  getFieldNames(): any {
    return ["id", "userId", "title", "body"];
  }

  toJson(): IPost {
    return {
      id: this._id,
      userId: this._userId,
      title: this._title,
      body: this._body,
    };
  }
}

export default Post;

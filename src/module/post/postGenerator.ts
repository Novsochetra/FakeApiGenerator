import Generator from "../generator";
import config from "../../config/env";
import faker from "faker";
import Post from ".";
import { IPost, IPostById } from "./interface";

class PostGenerator extends Generator {
  _data: IPost[] = [];
  _byId: IPostById = {};

  constructor() {
    super({ name: "posts" });
  }

  getRandom(id: number): any {
    return new Post({
      id,
      title: faker.lorem.text(),
      body: faker.lorem.paragraph(),
      userId: id,
    });
  }

  generate(): IPost[] {
    for (let index = 0; index < config.TOTAL_DATA_SIZE; index++) {
      let post = this.getRandom(index);

      this._data.push(post.toJson());
      this._byId[post._id] = post.toJson();
    }

    return this._data;
  }

  generateJSON(fileName: string): any {
    super.output(fileName, this._data, this._byId);
  }

  getAll() {
    return this._data;
  }
}

export default PostGenerator;

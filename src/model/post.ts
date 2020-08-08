import fs from "fs";
import BaseModel from "./base";

class PostModel extends BaseModel {
  constructor() {
    super();
  }

  static paginate(page: number, perPage: number): any {
    const des = __dirname + "/../output/posts.json";
    const rawData = fs.readFileSync(des).toString();
    const formattedData = JSON.parse(rawData);

    return super.paginate(page, perPage, formattedData);
  }
}

export default PostModel;

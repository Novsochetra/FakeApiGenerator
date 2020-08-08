import PostGenerator from "../../../src/module/post/postGenerator";
import Post from "../../../src/module/post";

describe("Module Post Generator ", () => {
  let postGenerator: PostGenerator;
  beforeEach(() => {
    postGenerator = new PostGenerator();
  });

  it("should be generate correct data", () => {
    postGenerator.generate();

    expect(postGenerator.getAll()).not.toHaveLength(0);
  });

  it("should return correct instance: ", () => {
    let random = postGenerator.getRandom(1);

    expect(random).toBeInstanceOf(Post);
  });
});

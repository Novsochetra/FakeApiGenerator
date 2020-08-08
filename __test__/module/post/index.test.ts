import Post from "../../../src/module/post";

describe("Module Geo converter ", () => {
  let post: Post;
  beforeEach(() => {
    post = new Post({ id: 1, userId: 1, title: "title", body: "body" });
  });

  it("should has correct attribute", () => {
    expect(post._id).toBe(1);
    expect(post._userId).toBe(1);
    expect(post._title).toBe("title");
    expect(post._body).toBe("body");
  });

  it("should return correct JSON format", () => {
    expect(post.toJson()).toStrictEqual({
      id: 1,
      userId: 1,
      title: "title",
      body: "body",
    });
  });
});

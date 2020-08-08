import Geo from "../../../module/geo";

describe("Module Geo converter ", () => {
  let geo: Geo;
  beforeEach(() => {
    geo = new Geo({ id: 1, lat: "10", lng: "10" });
  });

  it("should has correct attribute", () => {
    expect(geo._lat).toBe("10");
    expect(geo._lng).toBe("10");
    expect(geo._id).toBe(1);
  });

  it("should return correct JSON format", () => {
    expect(geo.toJson()).toStrictEqual({ id: 1, lat: "10", lng: "10" });
  });
});

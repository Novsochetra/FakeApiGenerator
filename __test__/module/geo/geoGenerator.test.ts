import GeoGenerator from "../../../src/module/geo/geoGenerator";
import Geo from "../../../src/module/geo";

describe("Module Geo Generator ", () => {
  let geoGenerator: GeoGenerator;
  beforeEach(() => {
    geoGenerator = new GeoGenerator();
  });

  it("should be generate correct data", () => {
    geoGenerator.generate();

    expect(geoGenerator.getAll()).not.toHaveLength(0);
  });

  it("should return correct instance: ", () => {
    let random = geoGenerator.getRandom();

    expect(random).toBeInstanceOf(Geo);
  });
});

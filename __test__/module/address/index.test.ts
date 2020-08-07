import Address from "../../../module/address";
import Geo from "../../../module/geo";

describe("Module Geo converter ", () => {
  let address: Address;
  let geo: Geo;
  beforeEach(() => {
    geo = new Geo({ id: 1, lat: "10", lng: "10" });
    address = new Address({
      id: 1,
      geo: geo,
      city: "phnom penh",
      zipcode: "1111",
      street: "121",
    });
  });

  it("should has correct attribute", () => {
    expect(address._id).toBe(1);
    expect(address._geo).toBeInstanceOf(Geo);
    expect(address._zipcode).toBe("1111");
    expect(address._street).toBe("121");
  });

  it("should return correct JSON format", () => {
    const expectedResult = {
      id: 1,
      zipcode: "1111",
      street: "121",
      city: "phnom penh",
      geo: geo.toJson(),
    };
    expect(address.toJson()).toStrictEqual(expectedResult);
  });
});

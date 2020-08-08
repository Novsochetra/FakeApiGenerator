import Company from "../../../src/module/company";
import User from "../../../src/module/user";
import Address from "../../../src/module/address";
import Geo from "../../../src/module/geo";

describe("Module Company converter ", () => {
  let company: Company;
  let user: User;
  let address: Address;
  let geo: Geo;

  beforeEach(() => {
    company = new Company({ id: 1, bs: "bs", name: "rich dev api" });
    geo = new Geo({ id: 1, lat: "10", lng: "10" });
    address = new Address({
      id: 1,
      street: "121",
      city: "phnom penh",
      zipcode: "1111",
      geo: geo,
    });

    user = new User({
      id: 1,
      firstName: "test",
      lastName: "test",
      email: "test@gmail.com",
      phone: "111111",
      website: "website.com",
      company: company,
      address: address,
    });
  });

  it("should has correct attribute", () => {
    expect(user._id).toBe(1);
    expect(user._firstName).toBe("test");
    expect(user._lastName).toBe("test");
    expect(user._email).toBe("test@gmail.com");
    expect(user._phone).toBe("111111");
    expect(user._website).toBe("website.com");
    expect(user._company).toBeInstanceOf(Company);
    expect(user._address).toBeInstanceOf(Address);
  });

  it("should return correct JSON format", () => {
    expect(user.toJson()).toStrictEqual({
      id: 1,
      firstName: "test",
      lastName: "test",
      email: "test@gmail.com",
      phone: "111111",
      address: address.toJson(),
      website: "website.com",
      company: company.toJson(),
    });
  });
});

import Company from "../../../src/module/company";

describe("Module Company converter ", () => {
  let company: Company;
  beforeEach(() => {
    company = new Company({ id: 1, bs: "bs", name: "rich dev api" });
  });

  it("should has correct attribute", () => {
    expect(company._id).toBe(1);
    expect(company._name).toBe("rich dev api");
    expect(company._bs).toBe("bs");
  });

  it("should return correct JSON format", () => {
    expect(company.toJson()).toStrictEqual({
      id: 1,
      bs: "bs",
      name: "rich dev api",
    });
  });
});

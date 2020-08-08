import CompanyGenerator from "../../../src/module/company/companyGenerator";
import Company from "../../../src/module/company";

describe("Module Company Generator ", () => {
  let companyGenerator: CompanyGenerator;
  beforeEach(() => {
    companyGenerator = new CompanyGenerator();
  });

  it("should be generate correct data", () => {
    companyGenerator.generate();

    expect(companyGenerator.getAll()).not.toHaveLength(0);
  });

  it("should return correct instance: ", () => {
    let random = companyGenerator.getRandom(1);

    expect(random).toBeInstanceOf(Company);
  });
});

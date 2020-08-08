import AddressGenerator from "../../../src/module/address/addressGenerator";
import Address from "../../../src/module/address";

describe("Module Address Generator ", () => {
  let addressGenerator: AddressGenerator;
  beforeEach(() => {
    addressGenerator = new AddressGenerator();
  });

  it("should be generate correct data", () => {
    addressGenerator.generate();
    expect(addressGenerator.getAll()).not.toHaveLength(0);
  });

  it("should return correct instance: ", () => {
    let random = addressGenerator.getRandom(1);

    expect(random).toBeInstanceOf(Address);
  });
});

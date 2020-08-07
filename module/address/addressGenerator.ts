import faker from "faker";
import config from "../../config/env";
import Generator from "../generator";
import Address from "./index";
import Geo from "../geo";

class AddressGenerator extends Generator {
  // TODO:
  // udpate the type any
  _data: any = [];
  _byId: any = {};

  constructor() {
    super({ name: "address" });
  }

  // TODO:
  // udpate the type any
  getRandom(id: number): any {
    let geo = new Geo({
      id: this.getRandomId(),
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    });

    return new Address({
      id,
      street: faker.address.streetName(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
      geo,
    });
  }

  generate() {
    for (let index = 0; index < config.TOTAL_DATA_SIZE; index++) {
      let address = this.getRandom(index);
      this._data.push(address.toJson());
      this._byId[address._id] = address.toJson();
    }

    return this._data;
  }

  generateJSON(fileName: string): any {
    super.output(fileName, this._data, this._byId);
  }

  getAll() {
    return this._data;
  }
}

export default AddressGenerator;

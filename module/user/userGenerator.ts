import faker from "faker";
import config from "../../config/env";
import Generator from "../generator";
import User from ".";
import CompanyGenerator from "../company/companyGenerator";
import AddressGenerator from "../address/addressGenerator";

class UserGenerator extends Generator {
  _data: any[] = [];
  _byId: { [key: number]: any } = {};

  constructor() {
    super({ name: "users" });
  }

  getRandom(id: number): any {
    const company = new CompanyGenerator();
    const address = new AddressGenerator();
    const companyId = this.getRandomId();
    const addressId = this.getRandomId();

    return new User({
      id: id,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      website: faker.helpers.userCard().website,
      company: company.getRandom(companyId).toJson(),
      address: address.getRandom(addressId).toJson(),
    });
  }

  generate(): any {
    for (let index = 0; index < config.TOTAL_DATA_SIZE; index++) {
      let user = this.getRandom(index);

      this._data.push(user.toJson());
      this._byId[user._id] = user.toJson();
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

export default UserGenerator;

import Generator from "../generator";
import config from "../../config/env";
import Geo from ".";
import faker from "faker";
import { IGeo, IGeoById } from "./interface";

class GeoGenerator extends Generator {
  private _data: IGeo[] = [];
  private _byId: IGeoById = {};

  constructor() {
    super({ name: "geos" });
  }

  getRandom() {
    return new Geo({
      id: this.getRandomId(),
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    });
  }

  generate(): IGeo[] {
    for (let index = 0; index < config.TOTAL_DATA_SIZE; index++) {
      let geo = this.getRandom();

      this._data.push(geo.toJson());
      this._byId[geo._id] = geo.toJson();
    }

    return this._data;
  }

  generateJSON(fileName: string): void {
    super.output(fileName, this._data, this._byId);
  }

  getAll() {
    return this._data;
  }
}

export default GeoGenerator;

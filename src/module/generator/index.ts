import fs from "fs";
import config from "../../config/env";

class Generator {
  // TODO:
  // check if we could remove _name
  private _name = "";

  constructor({ name }: { name: string }) {
    this._name = name;
  }

  getRandom(_id: number): any {}

  getRandomId() {
    return Math.floor(Math.random() * Math.floor(config.TOTAL_DATA_SIZE + 1));
  }

  output(fileName: string, data: any, byId: any): boolean {
    const dest = `${__dirname}/../../output/${fileName}.json`;
    const destById = `${__dirname}/../../output/${fileName}_by_id.json`;
    const destIds = `${__dirname}/../../output/${fileName}_ids.json`;
    const formattedData = JSON.stringify(data);
    const formattedByIdData = JSON.stringify(byId);
    const formattedIds = JSON.stringify(
      Array.from({ length: config.TOTAL_DATA_SIZE }, (_, i) => i)
    );

    fs.writeFileSync(dest, formattedData);
    fs.writeFileSync(destById, formattedByIdData);
    fs.writeFileSync(destIds, formattedIds);
    return true;
  }

  data() {}
}

export default Generator;

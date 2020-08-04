const fs = require("fs");
const config = require("../../config/env");

class Generator {
  _name = "";

  constructor({ name }) {
    this._name = name;
  }

  getRandom() {}

  getRandomId() {
    return Math.floor(Math.random() * Math.floor(config.TOTAL_DATA_SIZE + 1));
  }

  output(fileName, data, byId) {
    const dest = `${__dirname}/../../output/${fileName}.json`;
    const destById = `${__dirname}/../../output/${fileName}_by_id.json`;
    const destIds = `${__dirname}/../../output/${fileName}_ids.json`;
    const formattedData = JSON.stringify(data);
    const formattedByIdData = JSON.stringify(byId);
    const formattedIds = JSON.stringify(
      Array.from({ length: config.TOTAL_DATA_SIZE }, (x, i) => i)
    );

    fs.writeFileSync(dest, formattedData);
    fs.writeFileSync(destById, formattedByIdData);
    fs.writeFileSync(destIds, formattedIds);
    return true;
  }

  data() {}
}

module.exports = Generator;

const fs = require("fs");

class Generator {
  _name = "";

  constructor({ name }) {
    this._name = name;
  }

  getRandom() {}

  output(fileName, data, byId) {
    const dest = `${__dirname}/../../output/${fileName}.json`;
    const destById = `${__dirname}/../../output/${fileName}_by_id.json`;
    const formattedData = JSON.stringify(data);
    const formattedByIdData = JSON.stringify(byId);

    fs.writeFileSync(dest, formattedData);
    fs.writeFileSync(destById, formattedByIdData);
    return true;
  }

  data() {}
}

module.exports = Generator;

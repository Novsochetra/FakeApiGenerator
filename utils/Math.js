const config = require("../config/env");
module.exports = {
  getRandomId: () =>
    Math.floor(Math.random() * Math.floor(config.TOTAL_DATA_SIZE + 1)),
};

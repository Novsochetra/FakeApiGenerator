import config from "../config/env";

export const getRandomId = (): number =>
  Math.floor(Math.random() * Math.floor(config.TOTAL_DATA_SIZE + 1));

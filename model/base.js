class BaseModel {
  constructor() {}

  static paginate(page = 1, perPage = 10, data) {
    const startPos = (page - 1) * perPage;
    const endPos = parseInt(startPos) + parseInt(perPage);
    const paginatedData = data.slice(startPos, endPos);

    return paginatedData;
  }
}

module.exports = BaseModel;

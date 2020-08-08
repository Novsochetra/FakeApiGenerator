class BaseModel {
  constructor() {}

  static paginate(page = 1, perPage = 10, data: any[]): any {
    const startPos = (page - 1) * perPage;
    const endPos = startPos + perPage;
    const paginatedData = data.slice(startPos, endPos);

    return paginatedData;
  }
}

export default BaseModel;

class Address {
  _id: number;
  _street: string;
  _city: string;
  _zipcode: string;
  // TODO:
  // update type geo to geo class
  _geo: any;

  constructor({
    id,
    street,
    city,
    zipcode,
    geo,
  }: {
    id: number;
    street: string;
    city: string;
    zipcode: string;
    geo: any;
  }) {
    this._id = id;
    this._street = street;
    this._city = city;
    this._zipcode = zipcode;
    this._geo = geo;
  }

  // TODO:
  // update type return function
  getFieldNames(): any {
    return ["id", "street", "city", "geo"];
  }

  // TODO:
  // update type return function
  toJson(): any {
    return {
      id: this._id,
      street: this._street,
      city: this._city,
      zipcode: this._zipcode,
      geo: this._geo,
    };
  }
}

export default Address;

class Geo {
  _id: number;
  _lat: string;
  _lng: string;

  constructor({ id, lat, lng }: { id: number; lat: string; lng: string }) {
    this._id = id;
    this._lat = lat;
    this._lng = lng;
  }

  getLat(): string {
    return this._lat;
  }

  getLng(): string {
    return this._lng;
  }

  getFieldNames(): Array<any> {
    return ["lat", "lng"];
  }

  toJson(): { id: number; lat: string; lng: string } {
    return {
      id: this._id,
      lat: this._lat,
      lng: this._lng,
    };
  }
}

export default Geo;

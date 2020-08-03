class Geo {
  _id;
  _lat;
  _lng;

  constructor({ id, lat, lng }) {
    this._id = id;
    this._lat = lat;
    this._lng = lng;
  }

  getLat() {
    return this._lat;
  }

  getLng() {
    return this._lng;
  }

  getFieldNames() {
    return ["lat", "lng"];
  }

  toJson() {
    return {
      id: this._id,
      lat: this._lat,
      lng: this._lng,
    };
  }
}

module.exports = Geo;

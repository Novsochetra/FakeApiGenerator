class Company {
  constructor({ id, name, bs }) {
    this._id = id;
    this._name = name;
    this._bs = bs;
  }

  toJson() {
    return {
      id: this._id,
      name: this._name,
      bs: this._bs,
    };
  }
}

module.exports = Company;

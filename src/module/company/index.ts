import { ICompany } from "./interface";

class Company {
  _id: number;
  _name: string;
  _bs: string;

  constructor({ id, name, bs }: { id: number; name: string; bs: string }) {
    this._id = id;
    this._name = name;
    this._bs = bs;
  }

  toJson(): ICompany {
    return {
      id: this._id,
      name: this._name,
      bs: this._bs,
    };
  }
}

export default Company;

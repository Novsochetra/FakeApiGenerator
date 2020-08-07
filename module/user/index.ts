import Company from "../company";
import Address from "../address";

class User {
  _id: number;
  _firstName: string;
  _lastName: string;
  _email: string;
  _address: Address;
  _phone: string;
  _website: string;
  _company: Company;

  constructor({
    id,
    firstName,
    lastName,
    email,
    address,
    phone,
    website,
    company,
  }: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._address = address;
    this._phone = phone;
    this._website = website;
    this._company = company;
  }

  getFieldNames() {
    return [
      "id",
      "firstName",
      "lastName",
      "email",
      "address",
      "phone",
      "website",
      "company",
    ];
  }

  toJson() {
    return {
      id: this._id,
      firstName: this._firstName,
      lastName: this._lastName,
      email: this._email,
      address: this._address.toJson(),
      phone: this._phone,
      website: this._website,
      company: this._company.toJson(),
    };
  }
}
export default User;

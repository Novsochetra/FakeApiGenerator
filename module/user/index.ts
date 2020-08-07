class User {
  _id: number;
  _firstName: string;
  _lastName: string;
  _email: string;
  _address: any;
  _phone: string;
  _website: string;
  _company: any;

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
    address: any;
    phone: string;
    website: string;
    company: any;
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
      address: this._address,
      phone: this._phone,
      website: this._website,
      company: this._company,
    };
  }
}
export default User;

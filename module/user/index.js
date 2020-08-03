class User {
  constructor({
    id,
    firstName,
    lastName,
    email,
    address,
    phone,
    website,
    company,
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.company = company;
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
      id: this.id,
      name: this.name,
      bs: this.bs,
    };
  }
}

module.exports = User;

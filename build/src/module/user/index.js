"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor({ id, firstName, lastName, email, address, phone, website, company, }) {
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
exports.default = User;

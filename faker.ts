var fs = require("fs");
var faker = require("faker");

export type IGeo = {
  lat: string;
  lng: string;
};

export type IAddress = {
  street: string;
  city: string;
  zipcode: string;
  geo: IGeo;
};

export type ICompany = {
  name: string;
  bs: string;
};

export type IUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
};

type generateUserRecordType = {
  amount: number;
};

const generateUserRecord = ({ amount }: generateUserRecordType): IUser[] => {
  const users: IUser[] = [];
  const byId: { [key: string]: IUser } = {};

  for (let index = 0; index < amount; index++) {
    let id = faker.random.uuid();
    var firstName = faker.name.firstName(); // Rowan Nikolaus
    var lastName = faker.name.lastName(); // Kassandra.Haley@erich.biz
    var email = faker.internet.email();
    var address = {
      street: faker.address.streetName(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
      geo: {
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
      },
    };

    var phone = faker.phone.phoneNumber();
    var website = faker.helpers.userCard().website;
    var company: ICompany = {
      name: faker.company.companyName(),
      bs: faker.company.bs(),
    };

    const user: IUser = {
      id,
      firstName,
      lastName,
      email,
      address,
      phone,
      website,
      company,
    };

    byId[id] = user;

    users.push(user);
  }
  let usersData = JSON.stringify(users);
  let usersByIdData = JSON.stringify(users);
  fs.writeFileSync("output/users.json", usersData);
  fs.writeFileSync("output/users_by_id.json", usersByIdData);

  return users;
};

generateUserRecord({ amount: 100 });

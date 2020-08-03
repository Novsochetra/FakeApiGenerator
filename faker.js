var fs = require("fs");
var faker = require("faker");
var companyClass = require("./module/company/index");
const CompanyClass = require("./module/company/index");
const AddressClass = require("./module/address/index");
const UserClass = require("./module/user/index");

var generateUserRecord = function (_a) {
  var amount = _a.amount;
  var users = [];
  var byId = {};

  var address = [];
  var address_by_id = {};

  var company = [];
  var company_by_id = {};

  for (var index = 0; index < amount; index++) {
    var id = faker.random.uuid();
    var firstName = faker.name.firstName(); // Rowan Nikolaus
    var lastName = faker.name.lastName(); // Kassandra.Haley@erich.biz
    var email = faker.internet.email();

    var currentAddress = new AddressClass({
      id: faker.random.uuid(),
      street: faker.address.streetName(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
      geo: {
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
      },
    }).toJson();

    var currentCompany = new CompanyClass({
      id: faker.random.uuid(),
      name: faker.company.companyName(),
      bs: faker.company.bs(),
    }).toJson();

    address.push(currentAddress);
    address_by_id[currentAddress.id] = currentAddress;

    company.push(currentCompany);
    company_by_id[currentCompany.id] = currentAddress;

    var phone = faker.phone.phoneNumber();
    var website = faker.helpers.userCard().website;

    var user = new UserClass({
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: currentAddress,
      phone: phone,
      website: website,
      company: currentCompany,
    }).toJson();

    byId[id] = user;
    users.push(user);
  }

  var usersData = JSON.stringify(users);
  var usersByIdData = JSON.stringify(byId);

  var addressesData = JSON.stringify(address);
  var addressByIdData = JSON.stringify(address_by_id);

  var companiesData = JSON.stringify(company);
  var companiesByIdData = JSON.stringify(company_by_id);

  fs.writeFileSync("output/users.json", usersData);
  fs.writeFileSync("output/users_by_id.json", usersByIdData);

  fs.writeFileSync("output/addresses.json", addressesData);
  fs.writeFileSync("output/addresses_by_id.json", addressByIdData);

  fs.writeFileSync("output/companies.json", companiesData);
  fs.writeFileSync("output/companies_by_id.json", companiesByIdData);
  return users;
};

generateUserRecord({ amount: 100 });

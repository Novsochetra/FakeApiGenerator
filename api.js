const AddressGenerator = require("./module/address/addressGenerator");
const CompanyGenerator = require("./module/company/companyGenerator");
const GeoGenerator = require("./module/geo/geoGenerator");
const UserGenerator = require("./module/user/userGenerator");

let ad = new AddressGenerator();
let company = new CompanyGenerator();
let geo = new GeoGenerator();
let user = new UserGenerator();

ad.generate(5);
ad.output("addresses");

company.generate(5);
company.output("companies");

geo.generate(10);
geo.output("geos");

user.generate(10);
user.output("users");

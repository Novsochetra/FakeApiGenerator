const AddressGenerator = require("./module/address/addressGenerator");
const CompanyGenerator = require("./module/company/companyGenerator");
const GeoGenerator = require("./module/geo/geoGenerator");
const UserGenerator = require("./module/user/userGenerator");

let ad = new AddressGenerator();
let company = new CompanyGenerator();
let geo = new GeoGenerator();
let user = new UserGenerator();

ad.generate(20);
ad.output("addresses");

company.generate(20);
company.output("companies");

geo.generate(20);
geo.output("geos");

user.generate(20);
user.output("users");

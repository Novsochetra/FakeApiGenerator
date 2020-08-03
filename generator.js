const AddressGenerator = require("./module/address/addressGenerator");
const CompanyGenerator = require("./module/company/companyGenerator");
const GeoGenerator = require("./module/geo/geoGenerator");
const UserGenerator = require("./module/user/userGenerator");
const config = require("./config/env");

let ad = new AddressGenerator();
let company = new CompanyGenerator();
let geo = new GeoGenerator();
let user = new UserGenerator();

ad.generate(config.TOTAL_DATA_SIZE);
ad.output("addresses");

company.generate(config.TOTAL_DATA_SIZE);
company.output("companies");

geo.generate(config.TOTAL_DATA_SIZE);
geo.output("geos");

user.generate(config.TOTAL_DATA_SIZE);
user.output("users");

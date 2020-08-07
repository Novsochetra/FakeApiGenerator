import GeoGenerator from "./module/geo/geoGenerator";
import CompanyGenerator from "./module/company/companyGenerator";
import AddressGenerator from "./module/address/addressGenerator";
import UserGenerator from "./module/user/userGenerator";

let ad = new AddressGenerator();
let company = new CompanyGenerator();
let geo = new GeoGenerator();
let user = new UserGenerator();

ad.generate();
ad.generateJSON("addresses");

geo.generate();
geo.generateJSON("geos");

company.generate();
company.generateJSON("companies");

user.generate();
user.generateJSON("users");

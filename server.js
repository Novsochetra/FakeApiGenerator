const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  let usersRawData = fs.readFileSync(__dirname + "/output/users.json");
  let users = JSON.parse(usersRawData);
  res.json(users);
});

app.get("/addresses", (req, res) => {
  let addressesRawData = fs.readFileSync(__dirname + "/output/addresses.json");
  let addresses = JSON.parse(addressesRawData);
  res.json(addresses);
});

app.get("/companies", (req, res) => {
  let companiesRawData = fs.readFileSync(__dirname + "/output/companies.json");
  let companies = JSON.parse(companiesRawData);
  res.json(companies);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

import { IGeo } from "../geo/interface";

export interface IAddress {
  id: number;
  street: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface IAddressById {
  [key: number]: IAddress;
}

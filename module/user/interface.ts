import { IAddress } from "../address/interface";
import { ICompany } from "../company/interface";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  website: string;
  company: ICompany;
  address: IAddress;
}

export interface IUserById {
  [key: number]: IUser;
}

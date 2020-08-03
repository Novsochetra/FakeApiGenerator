import { ICompany } from "./company";
import { IAddress } from "./address";

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

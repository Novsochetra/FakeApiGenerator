export interface ICompany {
  id: number;
  name: string;
  bs: string;
}

export interface ICompanyById {
  [key: number]: ICompany;
}

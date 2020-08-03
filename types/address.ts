export type IGeo = {
  lat: string;
  lng: string;
};

export type IAddress = {
  street: string;
  city: string;
  zipcode: string;
  geo: IGeo;
};

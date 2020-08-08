export interface IGeo {
  id: number;
  lat: string;
  lng: string;
}

export interface IGeoById {
  [key: number]: IGeo;
}

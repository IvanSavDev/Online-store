export interface LaptopData {
  id: number;
  company: string;
  name: string;
  count: number;
  year: number;
  ssd: number;
  ram: number;
  cpu: string;
  color: string;
  price: number;
  favorite: boolean;
  [key: string]: string | number | boolean;
  // imgName: string;
};

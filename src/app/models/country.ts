import { Currency } from "./currency";

export interface Country {
  name: string;
  capital: string;
  population: number;
  currencies: Currency[];
  flag: string;
  region: string;
  alpha3Code: string;
}

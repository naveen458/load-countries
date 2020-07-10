import { Country } from "src/app/models/country";

export interface CountryState {
  countries: Country[];
  entities: { [key: string]: Country };
}

export const initialCountryState: CountryState = {
  countries: [],
  entities: {},
};

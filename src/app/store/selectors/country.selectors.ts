import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { CountryState } from "../state/country.state";
import { prepareEventListenerParameters } from "@angular/compiler/src/render3/view/template";

const selectCountries = (state: AppState) => state.countries;

export const selectCountriesByRegion = (region: string) =>
  createSelector(selectCountries, (state: CountryState) =>
    Object.keys(state.entities)
      .filter((key) => state.entities[key].region === region)
      .map((key) => state.entities[key])
  );

export const selectCountry = (countryCode: string) =>
  createSelector(selectCountries, (state: CountryState) => {
    return state.entities[countryCode];
  });

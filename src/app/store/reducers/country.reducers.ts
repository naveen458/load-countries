import { CountryActions, ECountryActions } from "../actions/country.actions";
import { initialCountryState, CountryState } from "../state/country.state";
import { Country } from "src/app/models/country";

export function countryReducers(
  state = initialCountryState,
  action: CountryActions
): CountryState {
  switch (action.type) {
    case ECountryActions.GetCountriesByRegionSuccess: {
      const entities = state.countries
        .concat(action.payload)
        .reduce(function (r, e) {
          r[e.alpha3Code] = e;
          return r;
        }, {});

      return {
        ...state,
        countries: [...state.countries, ...action.payload],
        entities,
      };
    }

    default: {
      return state;
    }
  }
}

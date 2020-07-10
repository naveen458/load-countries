import { RegionState, initialRegionState } from "./region.state";
import { CountryState, initialCountryState } from "./country.state";

export interface AppState {
  regions: RegionState;
  countries: CountryState;
}

export const initialAppState: AppState = {
  regions: initialRegionState,
  countries: initialCountryState,
};

export function getInitialAppState(): AppState {
  return initialAppState;
}

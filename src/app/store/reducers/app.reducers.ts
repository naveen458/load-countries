import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { countryReducers } from "./country.reducers";
import { regionReducers } from "./region.reducers";

export const appReducers: ActionReducerMap<AppState, any> = {
  countries: countryReducers,
  regions: regionReducers,
};

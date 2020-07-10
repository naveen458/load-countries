import { Action } from "@ngrx/store";
import { Country } from "src/app/models/country";

export enum ECountryActions {
  GetCountriesByRegion = "[Country] Get Countries By Region",
  GetCountriesByRegionSuccess = "[Country] Get Countries By Region Success",
}

export class GetCountriesByRegion implements Action {
  public readonly type = ECountryActions.GetCountriesByRegion;
  constructor(public payload: string) {}
}

export class GetCountriesByRegionSuccess implements Action {
  public readonly type = ECountryActions.GetCountriesByRegionSuccess;
  constructor(public payload: Country[]) {}
}

export type CountryActions = GetCountriesByRegion | GetCountriesByRegionSuccess;

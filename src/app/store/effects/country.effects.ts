import { Injectable } from "@angular/core";

import { Effect, ofType, Actions } from "@ngrx/effects";
import { CountryService } from "src/app/services/country.service";

import {
  ECountryActions,
  GetCountriesByRegion,
  GetCountriesByRegionSuccess,
} from "../actions/country.actions";

import { map, switchMap } from "rxjs/Operators";
import { Country } from "src/app/models/country";
import { of } from "rxjs";

@Injectable()
export class CountryEffects {
  constructor(
    private _action$: Actions,
    private _countryService: CountryService
  ) {}

  @Effect()
  getCountriesByRegion = this._action$.pipe(
    ofType<GetCountriesByRegion>(ECountryActions.GetCountriesByRegion),
    map((action) => action.payload),
    switchMap((region) => this._countryService.getCountriesByRegion(region)),
    switchMap((response: Country[]) =>
      of(new GetCountriesByRegionSuccess(response))
    )
  );
}

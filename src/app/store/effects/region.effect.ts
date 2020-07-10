import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { RegionService } from "src/app/services/region.service";
import {
  GetRegions,
  ERegionActions,
  GetRegionsSuccess,
} from "../actions/region.actions";
import { switchMap } from "rxjs/Operators";
import { Region } from "src/app/models/region";

@Injectable()
export class RegionEffects {
  constructor(
    private _actions$: Actions,
    private _regionService: RegionService
  ) {}

  @Effect()
  getRegions = this._actions$.pipe(
    ofType<GetRegions>(ERegionActions.GetRegions),
    switchMap(() => this._regionService.getRegions()),
    switchMap((response: Region[]) => of(new GetRegionsSuccess(response)))
  );
}

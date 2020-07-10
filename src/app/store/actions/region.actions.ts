import { Action } from "@ngrx/store";
import { Region } from "src/app/models/region";

export enum ERegionActions {
  GetRegions = "[Region] Get Regions",
  GetRegionsSuccess = "[Region] Get Regions Success",
}

export class GetRegions implements Action {
  public readonly type = ERegionActions.GetRegions;
}

export class GetRegionsSuccess implements Action {
  public readonly type = ERegionActions.GetRegionsSuccess;
  constructor(public payload: Region[]) {}
}

export type RegionActions = GetRegions | GetRegionsSuccess;

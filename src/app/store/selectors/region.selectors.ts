import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { RegionState } from "../state/region.state";

const regionsState = (state: AppState) => state.regions;

export const selectRegion = createSelector(
  regionsState,
  (state: RegionState) => state.regions
);

import { RegionActions, ERegionActions } from "../actions/region.actions";
import { RegionState, initialRegionState } from "../state/region.state";

export function regionReducers(
  state = initialRegionState,
  action: RegionActions
): RegionState {
  switch (action.type) {
    case ERegionActions.GetRegionsSuccess: {
      return {
        ...state,
        regions: [...state.regions, ...action.payload],
      };
    }

    default: {
      return state;
    }
  }
}

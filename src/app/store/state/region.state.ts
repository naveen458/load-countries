import { Region } from "src/app/models/region";

export interface RegionState {
  regions: Region[];
}

export const initialRegionState: RegionState = {
  regions: [],
};

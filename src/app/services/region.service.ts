import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Region } from "../models/region";

@Injectable()
export class RegionService {
  getRegions() {
    return of<Region[]>([
      {
        name: "Europe",
        value: "europe",
      },
      {
        name: "Asia",
        value: "asia",
      },
    ]);
  }
}

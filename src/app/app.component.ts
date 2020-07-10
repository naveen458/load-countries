import { Component, OnInit } from "@angular/core";
import { Region } from "./models/region";
import { AppState } from "./store/state/app.state";
import { Store, select } from "@ngrx/store";
import { GetRegions } from "./store/actions/region.actions";
import { selectRegion } from "./store/selectors/region.selectors";
import { Observable, Subscription, of } from "rxjs";
import { GetCountriesByRegion } from "./store/actions/country.actions";
import {
  selectCountriesByRegion,
  selectCountry,
} from "./store/selectors/country.selectors";
import { Country } from "./models/country";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "country-details";
  regions$: Subscription;
  countries$: Subscription;
  regions2$ = this._store.pipe(select(selectRegion));
  countries2$: Observable<Country[]>;
  selectedRegion: string;
  country: Country;

  ngOnInit() {
    this._store.dispatch(new GetRegions());
  }

  constructor(private _store: Store<AppState>) {}
 
  // load countries
  loadCountries(region: string) {
    if (region) {
      console.log(region);
      this.countries2$ = this._store.pipe(
        select(selectCountriesByRegion(region))
      );
      this._store.dispatch(new GetCountriesByRegion(region));
    } else {
      this.countries2$ = of([]);
      this.country = undefined;
    }
  }

  loadCountry(countyCode: string) {
    if (countyCode) {
      console.log(countyCode);
      this._store
        .pipe(select(selectCountry(countyCode)))
        .subscribe((country) => {
          this.country = country;
        });
    } else {
      this.country = undefined;
      console.log("No country selected");
    }
  }
}

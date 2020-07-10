import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Country } from "../models/country";

@Injectable()
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountriesByRegion(region: string) {
    return this.http.get<Country[]>(
      `http://restcountries.eu/rest/v2/region/${region}`
    );
  }
}

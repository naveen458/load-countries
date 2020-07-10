import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { appReducers } from "./store/reducers/app.reducers";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { RegionEffects } from "./store/effects/region.effect";
import { CountryEffects } from "./store/effects/country.effects";
import { RegionService } from "./services/region.service";
import { CountryService } from "./services/country.service";
import { environment } from "src/environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([RegionEffects, CountryEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [RegionService, CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}

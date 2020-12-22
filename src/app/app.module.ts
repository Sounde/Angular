import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoviesComponent } from './movies/movies.component';
import { AuthComponent } from './auth/auth.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { PlanetsComponent } from './planets/planets.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StarshipsComponent } from './starships/starships.component';
import { SpeciesComponent } from './species/species.component';
import { ApproutingModule } from './approuting.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MoviesComponent,
    AuthComponent,
    PeoplesComponent,
    PlanetsComponent,
    VehiclesComponent,
    StarshipsComponent,
    SpeciesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ApproutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

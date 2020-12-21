import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoviesComponent } from './header/movies/movies.component';
import { AuthComponent } from './auth/auth.component';
import { Routes } from '@angular/router';
import { PeoplesComponent } from './peoples/peoples.component';
import { PlanetsComponent } from './planets/planets.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StarshipsComponent } from './starships/starships.component';
import { SpeciesComponent } from './species/species.component';
import { RouterModule } from '@angular/router' ;

const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'peoples', component: PeoplesComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'staships', component: StarshipsComponent },
  { path: 'species', component: SpeciesComponent },

];

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
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

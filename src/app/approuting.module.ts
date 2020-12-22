import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeoplesComponent } from './peoples/peoples.component';
import { PlanetsComponent } from './planets/planets.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StarshipsComponent } from './starships/starships.component';
import { SpeciesComponent } from './species/species.component';
import { MoviesComponent } from './movies/movies.component';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'peoples', component: PeoplesComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'species', component: SpeciesComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class ApproutingModule { }

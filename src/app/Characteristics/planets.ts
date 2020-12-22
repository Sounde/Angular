

// tslint:disable-next-line: class-name
export class planets{
  results: any;
  name: string;
  // tslint:disable-next-line: variable-name
  rotation_period: number;
  // tslint:disable-next-line: variable-name
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  // tslint:disable-next-line: variable-name
  surface_water: number;
  population: number;
  residents: Array<string>;
  films: Array<string>;
  created: Date;
  edited: Date;
  url: string;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(planets?: any)
  {
    this.name = planets.name;
    this.rotation_period = planets.rotation_period;
    this.orbital_period = planets.orbital_period;
    this.diameter = planets.diameter;
    this.climate = planets.climate;
    this.gravity = planets.gravity;
    this.terrain = planets.terrain;
    this.surface_water = planets.surface_water;
    this.population = planets.population;
    this.residents = planets.residents;
    this.films = planets.films;
    this.created = planets.created;
    this.edited = planets.edited;
    this.url = planets.url;
    this.results = planets.results;
  }
}


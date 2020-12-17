

// tslint:disable-next-line: class-name
export class planets{

  name : string;
  rotation_period : number;
  orbital_period : number;
  diameter : number;
  climate : string;
  gravity : string;
  terrain : string;
  surface_water : number;
  population : number;
  residents : Array<string>;
  films : Array<string>;
  created : Date;
  edited : Date;
  url : string;

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

  }



}


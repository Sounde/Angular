

// tslint:disable-next-line: class-name
export class peoples{
  [x: string]: any;

  name: string;
  height: number;
  mass: number;
  // tslint:disable-next-line: variable-name
  hair_color: string;
  // tslint:disable-next-line: variable-name
  skin_color: string;
  // tslint:disable-next-line: variable-name
  eye_color: string;
  // tslint:disable-next-line: variable-name
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: Date;
  edited: Date;
  url: string;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(peoples?: any)
  {
    this.name = peoples.name;
    this.height = peoples.height;
    this.mass = peoples.mass;
    this.hair_color = peoples.hair_color;
    this.skin_color = peoples.skin_color;
    this.eye_color = peoples.eye_color;
    this.birth_year = peoples.birth_year;
    this.gender = peoples.gender;
    this.homeworld = peoples.homeworld;
    this.films = peoples.films;
    this.species = peoples.species;
    this.vehicles = peoples.vehicles;
    this.starships = peoples.starships;
    this.created = peoples.created;
    this.edited = peoples.edited;
    this.url = peoples.url;
  }



}

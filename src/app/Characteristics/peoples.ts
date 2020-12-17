import { Url } from 'url';

// tslint:disable-next-line: class-name
export class peoples{

  name: string;
  height : number;
  mass : number;
  hair_color : string;
  skin_color : string;
  eye_color : string;
  birth_year : string;
  gender : string;
  homeworld : Url;
  films : Array<Url>;
  species : Array<Url>;
  vehicles : Array<Url>;
  starships : Array<Url>;
  created : Date;
  edited : Date;
  url : Url;

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

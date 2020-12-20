

// tslint:disable-next-line: class-name
export class films{
  [x: string]: any;
  title: string;
  // tslint:disable-next-line: variable-name
  episode_id: number;
  // tslint:disable-next-line: variable-name
  opening_crawl: string;
  director: string;
  producer: string;
  // tslint:disable-next-line: variable-name
  release_date: Date;
  characters: Array<string>;
  planets: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  species: Array<string>;
  created: Date;
  edited: Date;
  url: string;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(films?: any){
    this.title = films.title;
    this.episode_id = films.episode_id;
    this.opening_crawl = films.opening_crawl;
    this.director = films.director;
    this.producer = films.producer;
    this.release_date = films.release_date;
    this.characters = films.characters;
    this.planets = films.planets;
    this.starships = films.starships;
    this.vehicles = films.vehicles;
    this.species = films.species;
    this.created = films.created;
    this.edited = films.edited;
    this.url = films.url;
  }
}

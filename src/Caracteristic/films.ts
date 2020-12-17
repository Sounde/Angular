import { Url } from "url";

export class films{
  title : string;
  episode_id : number;
  opening_crawl : string;
  director : string;
  producer : string;
  release_date : Date;
  characters : Array<Url>;
  planets : Array<Url>;
  starships : Array<Url>;
  vehicles : Array<Url>;
  species : Array<Url>;
  created : Date;
  edited : Date;
  url : Url;
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
};

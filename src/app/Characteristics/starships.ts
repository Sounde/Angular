import { Url } from 'url';

// tslint:disable-next-line: class-name
export class starships{
  name: string;
  model: string;
  manufacturer: string;
  // tslint:disable-next-line: variable-name
  cost_in_credits: number;
  length: number;
  // tslint:disable-next-line: variable-name
  max_atmosphering_speed: number;
  crew: string;
  passengers: number;
  // tslint:disable-next-line: variable-name
  cargo_capacity: number;
  consumables: string;
  // tslint:disable-next-line: variable-name
  hyperdrive_rating: Float32Array;
  MGLT: number;
  // tslint:disable-next-line: variable-name
  starships_class: string;
  pilots: Array<number>;
  created: Date;
  edited: Date;
  url: Array<string>;
  id: number;
  results: any;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(starships?: any)
  {
    this.name = starships.name;
    this.created = starships.created;
    this.model = starships.model;
    this.cargo_capacity = starships.cargo_capacity;
    this.MGLT = starships.MGLT;
    this.pilots = starships.pilots;
    this.edited = starships.edited;
    this.hyperdrive_rating = starships.hyperdrive_rating;
    this.consumables = starships.consumables;
    this.starships_class = starships.starships_class;
    this.max_atmosphering_speed = starships.max_atmosphering_speed;
    this.length = starships.length;
    this.passengers = starships.passengers;
    this.manufacturer = starships.manufacturer;
    this.id = starships.id;
    this.results = starships.results;
    this.cost_in_credits = starships.cost_in_credits;
  }
}

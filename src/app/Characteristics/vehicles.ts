import { Url } from 'url';

// tslint:disable-next-line: class-name
export class vehicles{
  name: string;
  model: string;
  manufacturer: string;
  // tslint:disable-next-line: variable-name
  cost_in_credits: number;
  length: Float32Array;
  // tslint:disable-next-line: variable-name
  max_astmosphering_speed: number;
  crew: number;
  passengers: number;
  // tslint:disable-next-line: variable-name
  cargo_capacity: number;
  consumables: string;
  // tslint:disable-next-line: variable-name
  vehicle_class: string;
  pilots: Array<number>;
  created: Date;
  edited: Date;
  url: Array<string>;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(vehicles?: any)
  {
    this.name = vehicles.name;
    this.model = vehicles.model;
    this.manufacturer = vehicles.manufacturer;
    this.cost_in_credits = vehicles.cost_in_credits;
    this.created = vehicles.created;
    this.pilots = vehicles.pilots;
    this.created = vehicles.created;
    this.cargo_capacity = vehicles.cargo_capacity;
    this.vehicle_class = vehicles.vehicle_class;
    this.crew = vehicles.crew;
    this.consumables = vehicles.consumables;
    this.edited = vehicles.edited;
    this.length = vehicles.length;
    this.passengers = vehicles.passengers;
  }
}



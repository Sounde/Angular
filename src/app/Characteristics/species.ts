

export class species{
  name : string;
  classification : string;
  designation : string;
  average_height : number;
  skin_color : string;
  hair_color : string;
  eye_color : string;
  average_lifespan : number;
  homeworld : string;
  language : string;
  people : Array<string>;
  films : Array<string>;
  created : Date;
  edited : Date;
  url : string;
  constructor(species?: any){
    this.name = species.name;
    this.classification = species.classification;
    this.designation = species.designation;
    this.average_height = species.average_height;
    this.skin_color = species.skin_color;
    this.hair_color = species.hair_color;
    this.eye_color = species.eye_color;
    this.average_lifespan = species.average_lifespan;
    this.homeworld = species.homeworld;
    this.language = species.language;
    this.people = species.people;
    this.films = species.films;
    this.created = species.created;
    this.edited = species.edited;
    this.url = species.url;
  }
}

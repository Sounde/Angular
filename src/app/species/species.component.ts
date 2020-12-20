import { Component, OnInit } from '@angular/core';
import { species } from '../Characteristics/species';
import { speciesService } from '../services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit  {
  [x: string]: any;

  peoples: species[];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private speciesService: speciesService)
  {
  }

  ngOnInit(): void{
    this.speciesService.getSpecies().subscribe((result: any) => {
      // tslint:disable-next-line: no-string-literal
      this.species = result['name'];
    });
  }
}


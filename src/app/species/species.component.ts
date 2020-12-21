import { Component } from '@angular/core';
import { SpeciesService } from '../services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent {

  listSpecies: Array<any>;
  constructor(private speciesservice: SpeciesService) {
    this.listSpecies = new Array();
    this.speciesservice.getSpecies().subscribe(
    (data: any) => {​​​​​​​
    console.log(data);
      // tslint:disable-next-line:no-string-literal
    this.listSpecies = this.listSpecies.concat(data['results']);
      }​​​​​​​,
      (err) => {​​​​​​​
        console.log('err');
      }​​​​​​);
   }
}


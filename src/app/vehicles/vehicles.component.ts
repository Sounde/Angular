import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent  {

  listVehicles: Array<any>;
  constructor(private vehicleService: VehiclesService) {
    this.listVehicles = new Array();
    this.vehicleService.getVehicles().subscribe(
    (data: any) => {​​​​​​​
    console.log(data);
      // tslint:disable-next-line:no-string-literal
    this.listVehicles = this.listVehicles.concat(data['results']);
      }​​​​​​​,
      (err) => {​​​​​​​
        console.log('err');
      }​​​​​​);
   }

}

import { Component, OnInit } from '@angular/core';
import { vehicles } from '../Characteristics/vehicles';
import { vehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent  {

  data: Array<any>;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private vehiclesService: vehiclesService)
  {
    this.data = new Array<any>();
  }
  getDataVehiclesfromAPI(): void {
    // tslint:disable-next-line:no-shadowed-variable
    this.vehiclesService.getVehicles().subscribe((data) => {
    this.data = data;
    });
  }

}



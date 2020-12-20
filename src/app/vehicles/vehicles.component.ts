import { Component, OnInit } from '@angular/core';
import { vehicles } from '../Characteristics/vehicles';
import { vehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit  {

  vehicles: vehicles[];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private vehiclesService: vehiclesService)
  {
  }

  ngOnInit(): void{
    this.vehiclesService.getVehicles().subscribe((result: any) => {
      // tslint:disable-next-line: no-string-literal
      this.vehicles = result['name'];
    });
  }
}



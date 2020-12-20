import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { peoples } from '../Characteristics/peoples';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit  {

  peoples: peoples[];
  constructor(private peopleService: PeopleService)
  {
  }

  ngOnInit(): void{
    this.peopleService.getPeoples().subscribe((result: any) => {
      // tslint:disable-next-line: no-string-literal
      this.peoples = result['name'];
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent  {

  listPeople: Array<any>;

  constructor(private peopleService: PeopleService){
    this.listPeople = new Array();
    this.peopleService.getPeoples().subscribe(
      (data: any) => {​​​​​​​
        console.log(data);
        // tslint:disable-next-line:no-string-literal
        this.listPeople = this.listPeople.concat(data['results']);
      }​​​​​​​,
      (err) => {​​​​​​​
        console.log('err');
      }​​​​​​​
    );
  }
}

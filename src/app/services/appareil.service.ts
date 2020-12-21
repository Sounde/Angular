import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  constructor() { }
  appareils: any[];
  // tslint:disable-next-line: typedef
  switchOffAll() {
    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line: typedef
  switchOnAll() {
    throw new Error('Method not implemented.');
  }
}

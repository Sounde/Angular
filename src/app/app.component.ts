import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../app/services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppComponent {
  title = 'SW';
}
export class AppareilViewComponent implements OnInit {

  appareils: any[];

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService: AppareilService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  // tslint:disable-next-line: typedef
  onAllumer() {
    this.appareilService.switchOnAll();
  }

  // tslint:disable-next-line: typedef
  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

}

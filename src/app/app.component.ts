import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { getCurrentTrains } from './Command/getCurrentTrains';
import { getCurrentBus } from './Command/getCurrentBus';
import { Traines, Bus, Traffic } from './Interfaces/StopPointRerInterface';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ETNA-traffic';
  traines: any;
  B325: Bus[] = [];
  B323: Bus[] = [];
  B125: Bus[] = [];

  TimeNow: Date = new Date();

  currentTrain: Traines[] = [];
  currentB325: Bus[] = [];
  currentB323: Bus[] = [];
  currentB125: Bus[] = [];

  all: Traffic = {
    B323: [],
    B325: [],
    B125: [],
    RER: [],
  };

  constructor(public http: HttpClient) {}

  ngOnInit(): any {
    // RER C
    this.http.get<any>('https://api-iv.iledefrance-mobilites.fr/lines/v2/line:IDFM:C01727/stops/stop_area:IDFM:424396/realTime')
    .subscribe((reponse: any) => {
    this.traines = reponse;
    this.currentTrain = getCurrentTrains(this.traines, this.TimeNow);
    });

    // Bus 325
    this.http.get<any>('https://api-iv.iledefrance-mobilites.fr/lines/v2/line:IDFM:C01288/stops/stop_area:IDFM:424422/realTime')
    .subscribe((reponse: any) => {
    let B325 = reponse;
    this.currentB325 = getCurrentBus(B325, this.TimeNow);
    });

    // Bus 323
    this.http.get<any>('https://api-iv.iledefrance-mobilites.fr/lines/v2/line:IDFM:C01287/stops/stop_area:IDFM:424422/realTime')
    .subscribe((reponse: any) => {
    let B323 = reponse;
    this.currentB323 = getCurrentBus(B323, this.TimeNow);
    });

    // Bus 125
    this.http.get<any>('https://api-iv.iledefrance-mobilites.fr/lines/v2/line:IDFM:C01154/stops/stop_area:IDFM:424422/realTime')
    .subscribe((reponse: any) => {
      let B125 = reponse;
      this.currentB125 = getCurrentBus(B125, this.TimeNow);
    });

    setTimeout(() => {
      document.location.reload();
    }, 30000);

    return this.currentTrain;
  }

}
function padTo2Digits(arg0: number) {
  throw new Error('Function not implemented.');
}


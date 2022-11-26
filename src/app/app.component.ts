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
  B325: any;
  B323: any;
  B125: any;
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
    this.B325 = reponse;
    this.currentB325 = getCurrentBus(this.B325, this.TimeNow);
    });

    // Bus 323
    this.http.get<any>('https://api-iv.iledefrance-mobilites.fr/lines/v2/line:IDFM:C01287/stops/stop_area:IDFM:424422/realTime')
    .subscribe((reponse: any) => {
    this.B323 = reponse;
    this.currentB323 = getCurrentBus(this.B323, this.TimeNow);
    });

    // Bus 125
    this.http.get<any>('https://api-iv.iledefrance-mobilites.fr/lines/v2/line:IDFM:C01154/stops/stop_area:IDFM:424422/realTime')
    .subscribe((reponse: any) => {
    this.B125 = reponse;
    this.currentB125 = getCurrentBus(this.B125, this.TimeNow);
    console.log(this.currentB125[0].timeLeft);
    });

    this.all.B323 = this.currentB323;
    this.all.B325 = this.currentB325;
    this.all.B125 = this.currentB125;
    this.all.RER = this.currentTrain;

    setTimeout(() => {
      document.location.reload();
    }, 30000);

    return this.all;
  }

}
function padTo2Digits(arg0: number) {
  throw new Error('Function not implemented.');
}


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { getCurrentTrains } from './Command/getCurrentTrains';
import { Traines } from './Interfaces/StopPointRerInterface';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ETNA-traffic';
  traines: any;
  TimeNow: Date = new Date();
  currentTrain: Traines[] = [];
  constructor(public http: HttpClient) {}

  ngOnInit(): any {
    this.http.get<any>('https://api-iv.iledefrance-mobilites.fr/lines/v2/line:IDFM:C01727/stops/stop_area:IDFM:424396/realTime')
    .subscribe((reponse: any) => {
    this.traines = reponse
    console.log(this.traines);
    this.currentTrain = getCurrentTrains(this.traines, this.TimeNow);
    console.log(this.currentTrain[0].Direction);
    });
    return this.currentTrain;
  }

}
function padTo2Digits(arg0: number) {
  throw new Error('Function not implemented.');
}


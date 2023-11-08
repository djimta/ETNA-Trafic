import { Bus } from '../Interfaces/StopPointRerInterface';

export const PassageTime = (time: number): string => {
  const TimeNow = new Date();
  let TimeLeft: number = time;
  var DateTrain: string ;
  let hoursNow: number = Number(TimeNow.getHours());
  let addMinutes: number = Number(TimeLeft) + Number(TimeNow.getMinutes());

  if (addMinutes > 60) {
    addMinutes = Math.floor(addMinutes / 60);
    hoursNow = hoursNow + 1;


  }

  if (hoursNow > 24) {
    hoursNow = 0;
  }
  if(String(addMinutes).length < 2 ){
    return `${hoursNow}:0${addMinutes} `;
  }else{
  return `${hoursNow}:${addMinutes}`;
}

}

//crée une commande pour récupérer les bus en temps réel
export const getCurrentBus = (bus: any, TimeNow: Date ) => {
  const buss = bus.nextDepartures.data;
  let CurrentBus: Bus[] = [];

  buss.forEach((element: { lineDirection: any; lineid: any; time: number; }) => {
    CurrentBus.push({
      Direction: element.lineDirection,
      lineid: element.lineid,
      timeLeft: element.time = element.time,
      //passagetime: getTime(TimeNow)
      passagetime: PassageTime(element.time),
    });
  });
  return CurrentBus;
}

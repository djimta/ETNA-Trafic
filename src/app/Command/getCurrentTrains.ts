import { Traines } from "../Interfaces/StopPointRerInterface";

export const PassageTime = (time: number): string => {
  const TimeNow = new Date();
  let TimeLeft: number = time;
  let hoursNow: number = Number(TimeNow.getHours());
  let addMinutes: number = Number(TimeLeft) + Number(TimeNow.getMinutes());

  if (addMinutes > 60) {
    addMinutes = Math.floor(addMinutes / 60);
    hoursNow = hoursNow + 1;
  }

  if (hoursNow > 24) {
    hoursNow = 0;
  }

  return `${hoursNow}:${addMinutes} minutes`;

}

//crée une commande pour récupérer les trains en temps réel
export const getCurrentTrains = (traines: any, TimeNow: Date ) => {
  const trains = traines.nextDepartures.data;
  var CurrentTrains: Traines[] = [];

  trains.forEach((element: { lineDirection: any; lineid: any; time: number; }) => {
    CurrentTrains.push({
      Direction: element.lineDirection,
      lineid: element.lineid,
      timeLeft: element.time = element.time,
      //passagetime: getTime(TimeNow)
      passagetime: PassageTime(element.time),
    });
  });
  return CurrentTrains;
}

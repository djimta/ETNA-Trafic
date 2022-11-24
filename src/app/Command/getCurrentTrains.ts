import { Traines } from "../Interfaces/StopPointRerInterface";

//crée une commande pour récupérer les trains en temps réel
export const getCurrentTrains = (traines: any) => {
  const trains = traines.nextDepartures.data;
  var CurrentTrains: Traines[] = [];

  trains.forEach((element: { lineDirection: any; lineid: any; time: any; }) => {
    CurrentTrains.push({
      Direction: element.lineDirection,
      lineid: element.lineid,
      timeLeft: element.time,
      TimePassing: new Date().setTime(new Date().getTime() + element.time * 1000),
    });
    if(element.time == "0"){
      time: "A quai"
      }else{
      time: element.time
      }
  });
  return CurrentTrains;
}


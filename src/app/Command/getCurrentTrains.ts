import { Traines } from "../Interfaces/StopPointRerInterface";

//crée une commande pour récupérer les trains en temps réel
export const getCurrentTrains = (traines: any, TimeNow: Date ) => {
  const trains = traines.nextDepartures.data;
  var CurrentTrains: Traines[] = [];


  trains.forEach((element: { lineDirection: any; lineid: any; time: any; }) => {
    CurrentTrains.push({
      Direction: element.lineDirection,
      lineid: element.lineid,
      timeLeft: element.time,
      //passagetime: getTime(TimeNow)
      passagetime: String(TimeNow.getHours()) + ':' + (Number(TimeNow.getMinutes() + Number(element.time))),
    });
    if(element.time == "0"){
      //CurrentTrains.time
      }else{
      time: element.time
      }
  });
  return CurrentTrains;
}


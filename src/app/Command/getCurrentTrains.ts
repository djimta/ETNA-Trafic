import { Traines } from "../Interfaces/StopPointRerInterface";

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

//crée une commande pour récupérer les trains en temps réel
export const getCurrentTrains = (traines: any, TimeNow: Date ) => {

  if (traines.nextDepartures.data.length > 0) {
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
  } else {
    return [
      { Direction: "Pas de train", lineid: "Pas de train", timeLeft: 0, passagetime: "Pas de train" },
      { Direction: "Pas de train", lineid: "Pas de train", timeLeft: 0, passagetime: "Pas de train" },
      { Direction: "Pas de train", lineid: "Pas de train", timeLeft: 0, passagetime: "Pas de train" },
      { Direction: "Pas de train", lineid: "Pas de train", timeLeft: 0, passagetime: "Pas de train" },
      { Direction: "Pas de train", lineid: "Pas de train", timeLeft: 0, passagetime: "Pas de train" },
      { Direction: "Pas de train", lineid: "Pas de train", timeLeft: 0, passagetime: "Pas de train" },
      { Direction: "Pas de train", lineid: "Pas de train", timeLeft: 0, passagetime: "Pas de train" },
    ];
  }
}

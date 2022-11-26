export interface Traines{
  Direction: string;
  lineid: string;
  timeLeft : number;
  passagetime : any;
}

export interface Bus{
  Direction: string;
  lineid: string;
  timeLeft : number;
  passagetime : any;
}

export interface Traffic {
  B323: Bus[];
  B325: Bus[];
  B125: Bus[];
  RER: Traines[];
}

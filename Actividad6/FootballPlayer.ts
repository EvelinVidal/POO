import { NationalFootballTeam } from "./NationalFootballTeam";

export class FootballPlayer extends NationalFootballTeam{
private height:number;
private age:number;
private team:string;
private numberAndPosition:string;
// private active:boolean;
constructor(nameMember:string, surnameMember:string, passportNumberMember:number, birthDate:string, heightPlayer:number, agePlayer:number, teamPlayer:string, numberAndPositionPlayer:string){
super(nameMember, surnameMember, passportNumberMember, birthDate)
this.height = heightPlayer;
this.age = agePlayer;
this.team = teamPlayer;
this.numberAndPosition = numberAndPositionPlayer;
}


}


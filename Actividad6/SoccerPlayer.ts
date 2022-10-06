import { NationalSoccerTeam } from "./NationalSoccerTeam";

export class SoccerPlayer extends NationalSoccerTeam{
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



getHeight():number{
    return this.height
}
getAge():number{
    return this.age;
}
getTeam():string{
    return this.team;
}
getNumberAndPosition():string{
    return this.numberAndPosition;
}
toString():string{
    return "Name: " + this.getName() + '\n' + "Surname: " + this.getSurname()  +'\n'+ "Birth Date: " + this.getBirthDate()+'\n'+"Passport number: " + this.getPassportNumber()+'\n'+"Height: "+ this.getHeight()+" centimeters."+"\n"+"Number of t-shirt and position on field: "+ this.getNumberAndPosition()+"\n"+"Team: "+this.getTeam()+"\n";
}
}


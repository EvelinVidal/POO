import { NationalSoccerTeam } from "./NationalSoccerTeam";
export class SoccerCoach extends NationalSoccerTeam {
  private teamManaged: string;
  constructor(
    nameMember: string,
    surnameMember: string,
    passportNumberMember: number,
    birthDate: string,
    teamManaged: string
  ) {
    super(nameMember, surnameMember, passportNumberMember, birthDate);
    this.teamManaged = teamManaged;
  }

  getTeamManaged():string{
    return this.teamManaged;
  }
  toString():string{
    return "Name: " + this.getName() + '\n' + "Surname: " + this.getSurname()  +'\n'+ "Birth Date: " + this.getBirthDate()+'\n'+"Passport number: " + this.getPassportNumber()+ "\n"+"Team managed: "+this.getTeamManaged()+"\n";
}
}

import { NationalSoccerTeam } from "./NationalSoccerTeam";
export class MassageTherapist extends NationalSoccerTeam{
collegeAndDegree:string;
lengthOfService:string;

constructor(nameMember:string, surnameMember:string, passportNumberMember:number, birthDate:string ,collegeAndDegree:string, lengthOfService:string){
    super(nameMember, surnameMember, passportNumberMember, birthDate)
this.collegeAndDegree = collegeAndDegree;
this.lengthOfService = lengthOfService;
}
 getCollegeAndDegree():string{
return this.collegeAndDegree;
 }
 getLengthOfService():string{
    return this.lengthOfService;
 }
 toString():string{
    return "Name: " + this.getName() + '\n' + "Surname: " + this.getSurname()  +'\n'+ "Birth Date: " + this.getBirthDate()+'\n'+"Passport number: " + this.getPassportNumber()+"\n"+"College and degree: "+this.getCollegeAndDegree()+"\n"+"Length of service: "+this.getLengthOfService()+"\n";
}
}
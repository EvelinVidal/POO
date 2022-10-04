import { NationalFootballTeam } from "./NationalFootballTeam";
export class MassageTherapist extends NationalFootballTeam{
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
}
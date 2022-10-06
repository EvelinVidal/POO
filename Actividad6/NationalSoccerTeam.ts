

export class NationalSoccerTeam{

private name:string
private surname:string;
private passportNumber:number;
private birthDate:string; // ver

constructor(nameMember:string, surnameMember:string, passportNumberMember:number, birthDate:string){
this.name = nameMember;
this.surname = surnameMember;
this.passportNumber = passportNumberMember;
this.birthDate = birthDate
}

getName():string{
    return this.name;
}
getSurname():string{
    return this.surname;
}
getBirthDate():string{
return this.birthDate;
}
getPassportNumber():number{
    return this.passportNumber;
}

}
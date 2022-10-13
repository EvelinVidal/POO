export class Person{
protected name:string;
protected surname:string;
protected id:string;

constructor(firstName:string, lastName:string, idNumber:string){
    this.name=firstName;
    this.surname=lastName;
    this.id=idNumber;

}
getName(){
    return this.name;
}
getSurname(){
    return this.surname;
}
getID(){ 
    return this.id; 
}
}
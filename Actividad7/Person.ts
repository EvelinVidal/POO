export class Person {
  protected name: string;
  protected surname: string;
  protected id: string;

  constructor(firstName: string, lastName: string, idNumber: string) {
    this.name = firstName;
    this.surname = lastName;
    this.id = idNumber;
  }
  public getName() {
    return this.name;
  }
  public getSurname() {
    return this.surname;
  }
  public getID() {
    return this.id;
  }
}

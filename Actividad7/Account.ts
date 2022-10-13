import {Person} from './Person';

export abstract class Account {
protected accountNumber:number;
protected balance:number;
protected customer:Person; // name surname id
constructor(accountNumber:number, customer:Person){
this.accountNumber = accountNumber;
this.balance=200;
customer=customer;

}

public getAccountNumber(){
return this.accountNumber;
}
public getBalance(){
return this.balance;
}
public getCustomer(){
return this.customer;
}
public setAccountNumber(newAccountNumber:number){
this.accountNumber = newAccountNumber;
}
public setBalance(newBalance:number){
this.balance=newBalance;
}
public setCustomer(newCustomer:Person):void{
this.customer = newCustomer;
}
public fundTransfer(addAmount:number){
this.balance +=addAmount;
}
abstract refreshBalance(annualInterest:number);
abstract withdraw(withdrawAmount:number);
}
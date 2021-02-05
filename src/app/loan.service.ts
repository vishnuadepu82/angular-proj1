import { Injectable } from '@angular/core';
import { loan } from './loan';

@Injectable( {providedIn:'root'})
export class LoanService {

  constructor() { }
  getSimpleInterest(loan:loan):number
  {  return (loan.amount*loan.period*loan.rateOfInterest)/100;}

  getAmountPayable(loan:loan):number
  { 
    return (loan.amount+ loan.SimpleInterest);
  }
  

}
import { Component } from "@angular/core";
import { loan } from "../loan";
import { LoanService } from "../loan.service";

@Component({
  selector: "app-loan-form",
  templateUrl: "./loan-form.component.html",
  styleUrls: ["./loan-form.component.css"]
})
export class LoanFormComponent {
  loan: loan;
  constructor(private loanService:LoanService ) {
    this.loan = {
      amount: 0,
      period: 0,
      rateOfInterest: 0,
      SimpleInterest: 0,
      amountPayable: 0
    };
  }
  compute()
  {
    // this.loan.SimpleInterest=(this.loan.amount*this.loan.period*this.loan.rateOfInterest)/100;

    // this.loan.amountPayable=this.loan.amount+ this.loan.SimpleInterest;
this.loan.SimpleInterest= this.loanService.getSimpleInterest(this.loan);
this.loan.amountPayable=this.loanService.getAmountPayable(this.loan);
    }
}

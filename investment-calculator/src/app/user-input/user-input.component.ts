import { Component, signal } from '@angular/core';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  
  constructor(private investmentService: InvestmentService){}
  enteredInitialInvestment = signal('0');
  enteredAnnualReturn = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualReturn(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration()
    })
  }
}

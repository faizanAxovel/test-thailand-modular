import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-receipt-amount',
  templateUrl: './receipt-amount.component.html',
  styleUrls: ['./receipt-amount.component.scss']
})
export class ReceiptAmountComponent implements OnInit {
  amount: string;
  errorText: string;
  isInvalid = true;
  constructor(
    private sharedService: SharedService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.amount = '';
    this.sharedService.calcProgress(6);
    const amountObj = this.localStorage.getSelectedData('receipt');
    if (amountObj) {
      this.amount = amountObj.amount;
      this.isInvalid = false;
    }
  }
  validate(event) {
    this.isInvalid = false;
    const res = this.sharedService.validateAmount(this.amount);
    if (res.message) {
      this.errorText = res.message;
      this.isInvalid = true;
      this.amount = '';
    } else {
      const otherAmount = this.localStorage.getSelectedData('otherClaim');
      if (otherAmount && parseInt(otherAmount.amount, 10) >= parseInt(this.amount, 10)) {
        this.isInvalid = true;
        this.errorText = 'Amount should be greater than other claim amount.';
      }
      this.amount = res.amount;
    }
    if (event.key === 'Enter' && !this.isInvalid) {
      this.selectedCurrency();
    }
  }
  selectedCurrency() {
    const amountObj = {
      amount: Number(this.amount).toFixed(2),
      currency: 'THD'
    };
    this.localStorage.setSelectedData('receipt', amountObj);
    this.sharedService._router.navigate(['/claim-process/other-claim']);
  }
}

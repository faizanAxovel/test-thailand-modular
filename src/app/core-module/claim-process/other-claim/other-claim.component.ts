import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-other-claim',
  templateUrl: './other-claim.component.html',
  styleUrls: ['./other-claim.component.scss']
})
export class OtherClaimComponent implements OnInit {
  selected: number;
  amount: string;
  errText: string;
  isInvalid = true;
  constructor(
    private sharedService: SharedService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.sharedService.calcProgress(7);
    this.selected = 0;
    const otherAmountObj = this.localStorage.getSelectedData('otherClaim');
    if (otherAmountObj) {
      if (otherAmountObj.currency !== 'None') {
        this.amount = otherAmountObj.amount;
        this.isInvalid = false;
        this.selected = 2;
      } else {
        this.selected = 1;
      }
    }
  }

  claimInsurer(claimInsurer) {
    if (claimInsurer) {
      this.selected = 2;
    } else {
      this.selected = 1;
      const obj = {
        currency: 'None',
        amount: '00.00'
      };
      this.localStorage.setSelectedData('otherClaim', obj);
      this.sharedService._router.navigate(['/claim-process/attach-document']);
    }
  }
  validate(event, button) {
    this.isInvalid = false;
    const res = this.sharedService.validateAmount(this.amount);
    if (res.message) {
      this.amount = '';
      this.errText = res.message;
      this.isInvalid = true;
    } else {
      const amountObj = this.localStorage.getSelectedData('receipt');
      if (amountObj && parseInt(amountObj.amount, 10) <= parseInt(this.amount, 10)) {
        this.isInvalid = true;
        this.errText = 'Amount must be less than claim amount.';
      }
      this.amount = res.amount;
    }
    if (event.key === 'Enter' && !this.isInvalid) {
      button.click();
    }
  }
  selectedOtherClaim() {
    const otherAmount = {
      currency: 'THD',
      amount: Number(this.amount).toFixed(2)
    };
    this.localStorage.setSelectedData('otherClaim', otherAmount);

    // check over limit or not 
    const amountObj = this.localStorage.getSelectedData('receipt');
    const isOverL = this.sharedService.isOverLimit(amountObj, otherAmount);
    if (isOverL) {
      this.sharedService.setTotalSCreen(11);
    } else {
      this.sharedService.setTotalSCreen(9);
    }
    const isGoToNext = this.localStorage.isGoNext(this.sharedService._router.url);
    if (isGoToNext.status) {
      this.sharedService._router.navigate(['/claim-process/attach-document']);
    } else {
      // if user edit the amount from reveiw claim than redirect to over limit page
      if (isOverL && isGoToNext.url === '/review-claim') {
        isGoToNext.url = '/claim-process/over-limit';
        this.localStorage.removeLatest();
      }
      this.sharedService._router.navigateByUrl(isGoToNext.url);
    }
  }
}

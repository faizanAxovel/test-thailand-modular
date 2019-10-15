import { Component, OnInit } from '@angular/core';
import { Claimant, ClaimType, Hospital, Diagnosis, Receipt } from 'src/app/shared/model/model';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-review-claim',
  templateUrl: './review-claim.component.html',
  styleUrls: ['./review-claim.component.scss']
})
export class ReviewClaimComponent implements OnInit {
  policy: any;
  consultDate: Date;
  claimant: Claimant;
  claimType: ClaimType;
  hospital: Hospital;
  diagnosis: Diagnosis;
  receipt: Receipt;
  otherClaim: Receipt;
  files: any;
  orReceipt: any;
  constructor(
    private localStorage: LocalStorageService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.policy = this.localStorage.getSelectedData('policy');
    // get consult date
    this.consultDate = this.localStorage.getSelectedData('consultDate');
    // get claimant
    this.claimant = this.localStorage.getSelectedData('claimant');
    // get claim type
    this.claimType = this.localStorage.getSelectedData('claimType');
    // get hospitals
    this.hospital = this.localStorage.getSelectedData('hospital');
    // get diagnosis
    this.diagnosis = this.localStorage.getSelectedData('diagnosis');
    // get receipt
    this.receipt = this.localStorage.getSelectedData('receipt');
    // other claim
    this.otherClaim = this.localStorage.getSelectedData('otherClaim');
    // files
    this.files = this.localStorage.getSelectedData('files');
    // original receipt
    this.orReceipt = this.localStorage.getSelectedData('orReceipt');
  }

  setLatestScreen(url: string) {
    this.localStorage.setLatestScreen(this.sharedService._router.url);
    this.sharedService._router.navigateByUrl(url);
  }

  // submit form
  submitForm() {
    const amount = parseInt(this.receipt.amount, 10);
    const otherAmount = parseInt(this.otherClaim.amount, 10);
    if ((amount - otherAmount) > 2000) {
      this.sharedService._router.navigate(['/claim/claim-warning']);
    } else {
      this.sharedService._router.navigate(['/claim/claim-submit']);
    }
  }
}

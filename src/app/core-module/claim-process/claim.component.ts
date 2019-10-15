import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Claimant, ClaimType, Hospital, Diagnosis, Receipt } from 'src/app/shared/model/model';
import { animatedSCreen } from './animation/animate';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss'],
  animations: [
    animatedSCreen
  ]
})
export class ClaimComponent implements OnInit {

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
    private sharedService: SharedService,
    private localStorage: LocalStorageService
  ) { }
  progressBar: number;
  ngOnInit() {
    this.sharedService.progressBar.subscribe(
      (res: number) => {
        this.progressBar = res;
      }
    );
    // check over limit when user refresh page
    // get consult date
    this.consultDate = this.localStorage.getSelectedData('consultDate');
    this.localStorage.subjects.consultDate.subscribe(
      (res: Date) => {
        this.consultDate = res;
      }
    );

    // get claimant
    this.claimant = this.localStorage.getSelectedData('claimant');
    this.localStorage.subjects.claimant.subscribe(
      (res: Claimant) => {
        this.claimant = res;
      }
    );

    // get claim type
    this.claimType = this.localStorage.getSelectedData('claimType');
    this.localStorage.subjects.claimType.subscribe(
      (res: ClaimType) => {
        this.claimType = res;
      }
    );

    // get hospitals
    this.hospital = this.localStorage.getSelectedData('hospital');
    this.localStorage.subjects.hospital.subscribe(
      (res: Hospital) => {
        this.hospital = res;
      }
    );

    // get diagnosis
    this.diagnosis = this.localStorage.getSelectedData('diagnosis');
    this.localStorage.subjects.diagnosis.subscribe(
      (res: Diagnosis) => {
        this.diagnosis = res;
      }
    );

    // get receipt
    this.receipt = this.localStorage.getSelectedData('receipt');
    this.localStorage.subjects.receipt.subscribe(
      (res: Receipt) => {
        this.receipt = res;
      }
    );

    // other claim
    this.otherClaim = this.localStorage.getSelectedData('otherClaim');
    this.localStorage.subjects.otherClaim.subscribe(
      (res: Receipt) => {
        this.otherClaim = res;
      }
    );


    // files
    this.files = this.localStorage.getSelectedData('files');
    this.localStorage.subjects.files.subscribe(
      (res: any) => {
        this.files = res;
      }
    );
    // original receipt

    this.orReceipt = this.localStorage.getSelectedData('orReceipt');
    this.localStorage.subjects.orReceipt.subscribe(
      (res: any) => {
        this.orReceipt = res;
      }
    );
    const isOver = this.sharedService.isOverLimit(this.receipt, this.otherClaim);
    if (isOver) {
      this.sharedService.setTotalSCreen(11);
    } else {
      this.sharedService.setTotalSCreen(9);
    }
  }

  // for removing the default sorting in keyvalue pipe
  returnZero() {
    return 0;
  }

  setLatestScreen(url) {
    this.localStorage.setLatestScreen(this.sharedService._router.url);
    this.sharedService._router.navigateByUrl(url);
  }

  // for getting the state while changin routes
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}

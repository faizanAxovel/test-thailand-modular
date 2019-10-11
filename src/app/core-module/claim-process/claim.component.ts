import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Claimant, ClaimType, Hospital, Diagnosis, Receipt } from 'src/app/shared/model/model';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
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
  }



  setLatestScreen(url) {
    this.localStorage.setLatestScreen(url);
    this.sharedService._router.navigateByUrl(url);
  }

}

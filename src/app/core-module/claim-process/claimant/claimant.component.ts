import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Claimant } from 'src/app/shared/model/model';
import { claimants } from 'src/app/shared/mockup/mockup';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
@Component({
  selector: 'app-claimant',
  templateUrl: './claimant.component.html',
  styleUrls: ['./claimant.component.scss']
})
export class ClaimantComponent implements OnInit {
  policyType = 'P';
  claimants: Claimant[] = claimants;
  claimant: Claimant;
  constructor(
    private sharedService: SharedService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.sharedService.calcProgress(2);
    this.claimant = this.localStorage.getSelectedData('claimant');
  }
  selected(event) {
    this.selectedClaim(event);
  }
  selectedClaim(claimant: Claimant) {
    this.localStorage.setSelectedData('claimant', claimant);
    const isGoToNext = this.localStorage.isGoNext(this.sharedService._router.url);
    if (isGoToNext.status) {
      this.sharedService._router.navigate(['claim-process/claim-type']);
    } else {
      this.sharedService._router.navigateByUrl(isGoToNext.url);
    }
  }
}

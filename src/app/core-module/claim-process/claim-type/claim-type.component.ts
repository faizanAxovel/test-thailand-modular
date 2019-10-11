import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ClaimType } from 'src/app/shared/model/model';
import { claimTypes } from 'src/app/shared/mockup/mockup';
import { myConstants } from 'src/app/shared/constant/constant';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
@Component({
  selector: 'app-claim-type',
  templateUrl: './claim-type.component.html',
  styleUrls: ['./claim-type.component.scss']
})
export class ClaimTypeComponent implements OnInit {
  claimTypes: ClaimType[];
  claimType: ClaimType;
  showPopup = false;
  message = myConstants.coveredMsg;
  constructor(
    private sharedService: SharedService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.sharedService.calcProgress(3);
    this.claimTypes = claimTypes;
    this.claimType = this.localStorage.getSelectedData('claimType');
  }

  canceled(data: boolean) {
    this.showPopup = data;
  }

  selecteClaimType(claimType: ClaimType, isCovered: boolean) {
    if (isCovered) {
      this.showPopup = true;
      return;
    }
    this.localStorage.setSelectedData('claimType', claimType);
    this.sharedService._router.navigate(['/claim-process/hospital-clinic']);
  }
}

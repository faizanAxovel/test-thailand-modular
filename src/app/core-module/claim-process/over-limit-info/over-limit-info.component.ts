import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-over-limit-info',
  templateUrl: './over-limit-info.component.html',
  styleUrls: ['./over-limit-info.component.scss']
})
export class OverLimitInfoComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.sharedService.calcProgress(10);
  }

  nextScreen() {
    const isGoToNext = this.localStorage.isGoNext(this.sharedService._router.url);
    if (isGoToNext.status) {
      this.sharedService._router.navigateByUrl('/claim-process/receipt-confirmation');
    } else {
      this.sharedService._router.navigateByUrl(isGoToNext.url);
    }
  }
}

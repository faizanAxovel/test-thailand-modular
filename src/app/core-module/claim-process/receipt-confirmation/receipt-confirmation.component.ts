import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-receipt-confirmation',
  templateUrl: './receipt-confirmation.component.html',
  styleUrls: ['./receipt-confirmation.component.scss']
})
export class ReceiptConfirmationComponent implements OnInit {
  originalRec: any;
  constructor(
    private sharedService: SharedService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    const data = this.localStorage.getSelectedData('orReceipt');
    if (data) {
      this.originalRec = data.status;
    }
    this.sharedService.calcProgress(10.92);
  }

  nextScreen(data: string) {
    const d = { status: data };
    this.localStorage.setSelectedData('orReceipt', d);
    const isGoToNext = this.localStorage.isGoNext(this.sharedService._router.url);
    if (isGoToNext.status) {
      this.sharedService._router.navigateByUrl('/review-claim');
    } else {
      this.sharedService._router.navigateByUrl(isGoToNext.url);
    }
  }
}

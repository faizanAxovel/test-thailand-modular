import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-consult-date',
  templateUrl: './consult-date.component.html',
  styleUrls: ['./consult-date.component.scss']
})
export class ConsultDateComponent implements OnInit {
  min: Date;
  max: Date;
  isInvalid: boolean;
  dateValue: Date;
  constructor(
    private sharedService: SharedService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    //           d  * h  * m  * s  * ms
    const days = 90 * 24 * 60 * 60 * 1000;
    this.min = new Date(Date.now() - days);
    this.max = new Date();
    this.dateValue = this.localStorage.getSelectedData('consultDate');
    // if date not set yet than add today date
    if (!this.dateValue) {
      this.dateValue = new Date();
    }
    this.sharedService.calcProgress(1);
  }

  consultDate(date: Date) {
    this.isInvalid = true;
    if (date) {
      this.isInvalid = false;
    }
    this.dateValue = date;
  }
  prevDate() {
    const prevDate = new Date();
    prevDate.setDate(prevDate.getDate() - 1);
    this.isInvalid = false;
    this.dateValue = prevDate;
  }
  todayDate() {
    this.isInvalid = false;
    this.dateValue = new Date();
  }

  setConsultDate() {
    this.localStorage.setSelectedData('consultDate', this.dateValue);
    const isGoToNext = this.localStorage.isGoNext(this.sharedService._router.url);
    if (isGoToNext.status) {
      this.sharedService._router.navigate(['/claim-process/claimant']);
    } else {
      this.sharedService._router.navigateByUrl(isGoToNext.url);
    }
  }
}

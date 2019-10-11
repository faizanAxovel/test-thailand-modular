import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-over-limit-info',
  templateUrl: './over-limit-info.component.html',
  styleUrls: ['./over-limit-info.component.scss']
})
export class OverLimitInfoComponent implements OnInit {

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.sharedService.calcProgress(8);
  }

  nextScreen() {
    this.sharedService._router.navigateByUrl('/claim-process/receipt-confirmation');
  }
}

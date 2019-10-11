import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Diagnosis } from 'src/app/shared/model/model';
import { diagnosis } from 'src/app/shared/mockup/mockup';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {
  dSearchStr: string;
  diagnosis: Diagnosis[];
  diag: Diagnosis;
  constructor(
    private sharedService: SharedService,
    private localStorage: LocalStorageService
  ) { }


  ngOnInit() {
    this.sharedService.calcProgress(5);
    this.diagnosis = diagnosis;
    this.diag = this.localStorage.getSelectedData('diagnosis');
  }

  selectedDiagnosis(diagnos: Diagnosis) {
    this.localStorage.setSelectedData('diagnosis', diagnos);
    this.sharedService._router.navigate(['/claim-process/receipt-amount']);
  }
}

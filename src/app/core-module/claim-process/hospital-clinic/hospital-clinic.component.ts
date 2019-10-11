import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Hospital } from 'src/app/shared/model/model';
import { hospitals } from 'src/app/shared/mockup/mockup';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-hospital-clinic',
  templateUrl: './hospital-clinic.component.html',
  styleUrls: ['./hospital-clinic.component.scss']
})
export class HospitalClinicComponent implements OnInit {
  searchStr: string;
  Hospitals: Hospital[];
  hospital: Hospital;
  constructor(
    private shraedService: SharedService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.shraedService.calcProgress(4);
    this.Hospitals = hospitals;
    this.hospital = this.localStorage.getSelectedData('hospital');
  }


  seleectedHospital(hosptal: Hospital) {
    this.localStorage.setSelectedData('hospital', hosptal);
    this.shraedService._router.navigate(['/claim-process/diagnosis']);
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public subjects = {
    policy: new Subject(),
    consultDate: new Subject(),
    claimant: new Subject(),
    claimType: new Subject(),
    hospital: new Subject(),
    diagnosis: new Subject(),
    receipt: new Subject(),
    otherClaim: new Subject(),
    files: new Subject(),
    orReceipt: new Subject()
  };

  urls = ['/claim-process/consult-date', '/claim-process/claimant', '/claim-process/claim-type', '/claim-process/hospital-clinic', '/claim-process/diagnosis', '/claim-process/receipt-amount', 'claim-process/other-claim', '/claim-process/attach-document', '/claim-process/over-limit', '/claim-process/receipt-confirmation', '/review-claim'];



  constructor() { }


  // set selected data

  setSelectedData(key: string, value: any): void {
    this.subjects[key].next(value);
    localStorage.setItem(key, JSON.stringify(value));
  }
  getSelectedData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
  deleteSelectedData(key: any): void {
    localStorage.removeItem(key);
  }

  // set latest screen 
  setLatestScreen(url: string): void {
    localStorage.setItem('latestScreen', url);
  }
  getLatestSCreen(): string {
    return localStorage.getItem('latestScreen');
  }
  removeLatest(): void {
    localStorage.removeItem('latestScreen');
  }


  // latest screen process
  // this function check from which screen user come
  isGoNext(url: string): { status: boolean, url: string } {
    const data = { status: true, url: '' };
    const latestScreen = this.getLatestSCreen();
    const index = this.urls.indexOf(url);
    const newArr = this.urls.slice(0, index);
    if (latestScreen && url !== latestScreen && newArr.indexOf(latestScreen.split('?')[0]) === -1) {
      data.status = false;
      data.url = latestScreen;
    }
    return data;
  }
}

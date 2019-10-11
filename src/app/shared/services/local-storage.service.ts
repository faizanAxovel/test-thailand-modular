import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public subjects = {
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
}

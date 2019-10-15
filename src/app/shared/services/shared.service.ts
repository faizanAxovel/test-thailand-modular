import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { myConstants } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // subjects variables
  totalScreen = 9;
  progressBar = new Subject();
  constructor(
    public _router: Router,
  ) {
  }

  // calcultae progress bar

  calcProgress(screen: number) {
    let percent = (screen / this.totalScreen) * 100;
    if (percent >= 100) {
      percent = 99;
    }
    this.progressBar.next(Math.floor(percent));
  }


  // compress image 

  compress(file: File): Observable<any> {
    const width = 600; // For scaling relative to width
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return Observable.create(observer => {
      reader.onload = ev => {
        const img = new Image();
        img.src = (ev.target as any).result;
        (img.onload = () => {
          const elem = document.createElement('canvas'); // Use Angular's Renderer2 method
          const scaleFactor = width / img.width;
          elem.width = width;
          elem.height = img.height * scaleFactor;
          const ctx = <CanvasRenderingContext2D>elem.getContext('2d');
          ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
          ctx.canvas.toBlob(
            blob => {
              const b: any = new Blob([blob], { type: 'image/jpeg' });
              observer.next({ b, name: file.name });
            },
            'image/jpeg',
            1
          );
        }),
          (reader.onerror = error => observer.error(error));
      };
    });
  }
  // validate the receipt amount 
  validateAmount(amount: string): any {
    amount = amount.trim();
    if (amount.search(/^[0-9 .]+$/g) === -1) {
      amount = '';
      return { message: myConstants.wrongAmount };
    }
    if (amount !== '' && parseInt(amount, 10) > 1000000) {
      amount = '';
      return { message: myConstants.validAmount };
    }
    if (amount !== '' && amount.indexOf('.') !== -1) {
      const arr = amount.split('.');
      if (arr.length > 2) {
        amount = arr[0] + '.';
      } else if (arr[0] === '') {
        amount = '';
        return { message: myConstants.wrongAmount };
      }
      if (arr[arr.length - 1].length > 2) {
        amount = Number(amount).toFixed(2);
      }
      return { message: '', amount };
    } else {
      if (amount === '0') {
        return { message: myConstants.wrongAmount }
      }
      return { message: '', amount };
    }
  }

  // convert file object to array
  toFileArray(files: any): any[] {
    let arr = [];
    for (const file of Object.keys(files)) {
      arr = arr.concat(files[file]);
    }
    return arr;
  }



  // check is overlimit 
  isOverLimit(amount: any, otherAmount: any): boolean {
    let flag = false;
    if (amount) {
      const am = parseInt(amount.amount, 10);
      if (otherAmount && otherAmount.currency !== 'None') {
        const otherAm = parseInt(otherAmount.amount, 10);
        if (am - otherAm > 2000) {
          flag = true;
        }
      } else if (am > 2000) {
        flag = true;
      }
    }
    return flag;
  }

  // setTotalScreen 
  setTotalSCreen(screens: number): void {
    this.totalScreen = screens;
  }
}

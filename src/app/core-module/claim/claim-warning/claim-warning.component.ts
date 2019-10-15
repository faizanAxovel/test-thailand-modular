import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-claim-warning',
  templateUrl: './claim-warning.component.html',
  styleUrls: ['./claim-warning.component.scss']
})
export class ClaimWarningComponent implements OnInit, OnDestroy {
  refrenceCode: string;
  buttonText: string;
  count: number;
  constructor(
    private rendrer: Renderer2
  ) { }

  ngOnInit() {
    localStorage.clear();
    this.rendrer.setStyle(document.body, 'backgroundColor', '#fff');
    this.rendrer.removeClass(document.querySelector('#my-wrapper'), 'policy-deatil-card');
    this.refrenceCode = 'E0156556';
    this.buttonText = 'Copy Reference Code';
  }
  /* To copy reference text */
  copyReferenceCode(val: string) {
    this.count++;
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.buttonText = 'Copied!';
    if (this.count > 1) {
      this.buttonText = 'Copied again!';
    }
  }
  ngOnDestroy() {
    this.rendrer.removeStyle(document.body, 'backgroundColor');
    this.rendrer.addClass(document.querySelector('#my-wrapper'), 'policy-deatil-card');
  }

}

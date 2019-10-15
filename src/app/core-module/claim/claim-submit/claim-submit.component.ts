import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-claim-submit',
  templateUrl: './claim-submit.component.html',
  styleUrls: ['./claim-submit.component.scss']
})
export class ClaimSubmitComponent implements OnInit, OnDestroy {
  refrenceCode: string;
  buttonText: string;
  count: number;
  constructor(
    private rendrer: Renderer2
  ) { }

  ngOnInit() {
    localStorage.clear();
    this.rendrer.setStyle(document.body, 'backgroundColor', '#fff');
    this.refrenceCode = 'E0156556';
    this.buttonText = 'Copy Reference Code';
    this.rendrer.removeClass(document.querySelector('#my-wrapper'), 'policy-deatil-card');

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

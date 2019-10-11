import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  termsCondition: string;
  privacyPolicy: string;
  mPrivacyPolicy: string;
  constructor() { }

  ngOnInit() {
    this.termsCondition = environment.anchors.termsCondition;
    this.privacyPolicy = environment.anchors.privacyPolicy;
    this.mPrivacyPolicy = environment.anchors.mPrivacyPolicy;
  }

}

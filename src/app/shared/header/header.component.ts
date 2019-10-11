import { Component, OnInit } from '@angular/core';
import { myConstants } from '../constant/constant';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lang = 'ENGLISH';
  contactUrl: string;
  easyClaimUrl: string;
  libertyLogo: string;
  contactSvg: string;
  languages: string[];
  constructor() { }
  ngOnInit() {
    this.libertyLogo = myConstants.images +  'liberty-new-logo.png';
    this.contactUrl = environment.anchors.contactUs;
    this.easyClaimUrl = environment.anchors.easyClaim;
    this.contactSvg = myConstants.images + 'contact.svg';
    this.languages = myConstants.languages;
  }

}

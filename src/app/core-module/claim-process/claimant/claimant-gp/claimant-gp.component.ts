import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Claimant } from 'src/app/shared/model/model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-claimant-gp',
  templateUrl: './claimant-gp.component.html',
  styleUrls: ['./claimant-gp.component.scss']
})
export class ClaimantGpComponent implements OnInit {
  dependantForm: FormGroup;
  isDependant = false;
  @Input() claimant: Claimant;
  @Output() seletedClaimant = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.dependantForm = new FormGroup({
      name: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required)
    });
  }

  selectDependant() {
    this.isDependant = true;
  }
  select(name: string) {
    this.seletedClaimant.emit({ id: 4, name });
  }
}

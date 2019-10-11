import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { myConstants } from 'src/app/shared/constant/constant';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-policy-validator',
  templateUrl: './policy-validator.component.html',
  styleUrls: ['./policy-validator.component.scss']
})
export class PolicyValidatorComponent implements OnInit {
  icon: string;
  policyForm: FormGroup;
  policyValidation: any;
  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.icon = myConstants.images + 'info-icon.png';
    this.initiolize();
    localStorage.clear();
  }

  initiolize() {
    this.policyForm = new FormGroup({
      policyNumber: new FormControl('', [Validators.required, Validators.pattern(/^[\w\s]+$/)]),
      policyText: new FormControl('', [Validators.required, Validators.pattern(/^[\w\s]+$/)]),
      unitNumber: new FormControl('', [Validators.required, Validators.pattern(/^[\w\s]+$/)]),
      unitText: new FormControl('', [Validators.required, Validators.pattern(/^[\w\s]+$/)]),
      passportNumber: new FormControl('', [Validators.required, Validators.pattern(/^[\w\s]+$/)]),
    });
    this.policyValidation = {
      policyNumber: [
        { type: 'required', message: 'Policy Number is a required field.' },
        { type: 'pattern', message: 'Policy Number cannot contain special characters.' }
      ],
      policyText: [
        { type: 'required', message: 'Policy Number is a required field.' },
        { type: 'pattern', message: 'Policy Number cannot contain special characters.' }
      ],
      unitNumber: [
        { type: 'required', message: 'Unit Number is a required field.' },
        { type: 'pattern', message: 'Unit Number cannot contain special characters.' }
      ],
      unitText: [
        { type: 'required', message: 'Unit Number is a required field.' },
        { type: 'pattern', message: 'Unit Number cannot contain special characters.' }
      ],
      passportNumber: [
        { type: 'required', message: 'TH ID / Passport Number is a required field.' },
        { type: 'pattern', message: 'TH ID / Passport Number cannot contain special characters.' }
      ]
    };
  }

  get policyNumber(): AbstractControl {
    return this.policyForm.get('policyNumber');
  }
  get policyText(): AbstractControl {
    return this.policyForm.get('policyText');
  }
  get unitNumber(): AbstractControl {
    return this.policyForm.get('unitNumber');
  }
  get unitText(): AbstractControl {
    return this.policyForm.get('unitText');
  }
  get passportNumber(): AbstractControl {
    return this.policyForm.get('passportNumber');
  }



  marksDirty(form: FormGroup) {
    const keys = Object.keys(form.value);
    keys.forEach((key) => {
      const control = this.policyForm.get(key);
      control.setValue(control.value.trim());
      control.markAsDirty();
    });
  }


  // while submitting the policy 
  onSubmit() {
    this.marksDirty(this.policyForm);
    if (this.policyForm.valid) {
      this.sharedService._router.navigate(['claim-process/consult-date']);
    }
  }

}

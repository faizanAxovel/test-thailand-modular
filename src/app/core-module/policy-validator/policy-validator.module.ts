import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PolicyValidatorComponent } from './policy-validator/policy-validator.component';
import { ReactiveFormsModule } from '@angular/forms';


// defining routes for policy validator module
const routes: Routes = [
  {
    path: '',
    component: PolicyValidatorComponent
  }
];

@NgModule({
  declarations: [PolicyValidatorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PolicyValidatorModule { }

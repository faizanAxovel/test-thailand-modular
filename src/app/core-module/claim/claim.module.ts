import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimSubmitComponent } from './claim-submit/claim-submit.component';
import { ClaimWarningComponent } from './claim-warning/claim-warning.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'claim-submit',
    component: ClaimSubmitComponent
  },
  {
    path: 'claim-warning',
    component: ClaimWarningComponent
  }
];

@NgModule({
  declarations: [ClaimSubmitComponent, ClaimWarningComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClaimModule { }

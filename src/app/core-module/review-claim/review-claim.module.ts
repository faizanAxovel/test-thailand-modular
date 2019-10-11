import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewClaimComponent } from './review-claim/review-claim.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ReviewClaimComponent
  }
];

@NgModule({
  declarations: [ReviewClaimComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReviewClaimModule { }

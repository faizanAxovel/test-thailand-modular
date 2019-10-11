import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyValidatorModule } from './core-module/policy-validator/policy-validator.module';
import { ClaimProcessModule } from './core-module/claim-process/claim-process.module';
import { ReviewClaimModule } from './core-module/review-claim/review-claim.module';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { ClaimModule } from './core-module/claim/claim.module';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./core-module/policy-validator/policy-validator.module').then(m => PolicyValidatorModule)
  },
  {
    path: 'claim-process',
    loadChildren: () => import('./core-module/claim-process/claim-process.module').then(m => ClaimProcessModule)
  },
  {
    path: 'review-claim',
    loadChildren: () => import('./core-module/review-claim/review-claim.module').then(m => ReviewClaimModule)
  },
  {
    path: 'claim',
    loadChildren: () => import('./core-module/claim/claim.module').then(m => ClaimModule)
  },
  {
    path: 'terms-condition',
    component: TermsConditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

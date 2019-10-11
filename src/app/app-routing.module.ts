import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyValidatorModule } from './core-module/policy-validator/policy-validator.module';
import { ClaimProcessModule } from './core-module/claim-process/claim-process.module';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./core-module/policy-validator/policy-validator.module').then(m => PolicyValidatorModule)
  },
  {
    path: 'claim-process',
    loadChildren: () => import('./core-module/claim-process/claim-process.module').then(m => ClaimProcessModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

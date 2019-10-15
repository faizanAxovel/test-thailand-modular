import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultDateComponent } from './consult-date/consult-date.component';
import { Routes, RouterModule } from '@angular/router';
import { ClaimComponent } from './claim.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ClaimantComponent } from './claimant/claimant.component';
import { ClaimantGpComponent } from './claimant/claimant-gp/claimant-gp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClaimTypeComponent } from './claim-type/claim-type.component';
import { ModalComponent } from './modal/modal.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { HospitalClinicComponent } from './hospital-clinic/hospital-clinic.component';
import { FormsModule } from '@angular/forms';
import { SearchDoctorPipe } from './pipe/search-doctor.pipe';
import { ReceiptAmountComponent } from './receipt-amount/receipt-amount.component';
import { DiagnosisPipe } from './pipe/diagnosis.pipe';
import { OtherClaimComponent } from './other-claim/other-claim.component';
import { AttachDocumentComponent } from './attach-document/attach-document.component';
import { OverLimitInfoComponent } from './over-limit-info/over-limit-info.component';
import { ReceiptConfirmationComponent } from './receipt-confirmation/receipt-confirmation.component';

const routes: Routes = [
  {
    path: '',
    component: ClaimComponent,
    children: [
      {
        path: 'consult-date',
        component: ConsultDateComponent,
        data: {
          animation: 'consultDate'
        }
      },
      {
        path: 'claimant',
        component: ClaimantComponent,
        data: {
          animation: 'claimant'
        }
      },
      {
        path: 'claim-type',
        component: ClaimTypeComponent,
        data: {
          animation: 'claimType'
        }
      },
      {
        path: 'hospital-clinic',
        component: HospitalClinicComponent,
        data: {
          animation: 'hospitalClinic'
        }
      },
      {
        path: 'diagnosis',
        component: DiagnosisComponent,
        data: {
          animation: 'diagnosis'
        }
      },
      {
        path: 'receipt-amount',
        component: ReceiptAmountComponent,
        data: {
          animation: 'receiptAmount'
        }
      },
      {
        path: 'other-claim',
        component: OtherClaimComponent,
        data: {
          animation: 'otherClaim'
        }
      },
      {
        path: 'attach-document',
        component: AttachDocumentComponent,
        data: {
          animation: 'attachDocument'
        }
      },
      {
        path: 'receipt-confirmation',
        component: ReceiptConfirmationComponent,
        data: {
          animation: 'receiptConfirmation'
        }
      },
      {
        path: 'over-limit',
        component: OverLimitInfoComponent,
        data: {
          animation: 'overLimit'
        }
      }
    ]
  }
];

@NgModule({
  declarations: [
    ConsultDateComponent,
    ClaimComponent,
    ClaimantComponent,
    ClaimantGpComponent,
    ClaimTypeComponent,
    ModalComponent,
    DiagnosisComponent,
    HospitalClinicComponent,
    SearchDoctorPipe,
    DiagnosisPipe,
    ReceiptAmountComponent,
    OtherClaimComponent,
    AttachDocumentComponent,
    OverLimitInfoComponent,
    ReceiptConfirmationComponent
  ],
  imports: [
    CommonModule,
    DatePickerModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ClaimProcessModule { }

import { trigger, transition, style, animate } from '@angular/animations';

export const animatedSCreen = trigger('routeAnimations', [
    transition('* => consultDate,* => claimant, * => claimType, * => hospitalClinic, * => diagnosis, * => receiptAmount, * => otherClaim, * => attachDocument, * => receiptConfirmation, * => overLimit', [
        style({ opacity: 0 }), animate('0.6s')
    ])
]);

export const slideInOut = trigger('slideInOut', [
    transition('* => 1, * => 2', [
        style({ opacity: 0 }), animate('0.6s')
    ])
]);

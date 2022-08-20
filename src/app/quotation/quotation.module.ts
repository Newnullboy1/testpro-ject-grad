import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotationRoutingModule } from './quotation-routing.module';
import { QuotationComponent } from './quotation.component';
import { QuotationFormComponent } from './quotation-form/quotation-form.component';
import { QuotationProposalComponent } from './quotation-proposal/quotation-proposal.component';
import { QuotationSubmitedComponent } from './quotation-submited/quotation-submited.component';


@NgModule({
  declarations: [
    QuotationComponent,
    QuotationFormComponent,
    QuotationProposalComponent,
    QuotationSubmitedComponent
  ],
  imports: [
    CommonModule,
    QuotationRoutingModule,
  ]
})
export class QuotationModule { }

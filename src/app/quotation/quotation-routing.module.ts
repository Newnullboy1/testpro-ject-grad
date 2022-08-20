import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotationProposalComponent } from './quotation-proposal/quotation-proposal.component';
import { QuotationSubmitedComponent } from './quotation-submited/quotation-submited.component';
import { QuotationComponent } from './quotation.component';

const routes: Routes = [
  { path: '', component: QuotationComponent, pathMatch: 'full' }, 
  { path: 'proposal', component: QuotationProposalComponent }, 
  { path: 'submited', component: QuotationSubmitedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationRoutingModule { }

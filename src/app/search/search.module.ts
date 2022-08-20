import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { QuotationSerachComponent } from './quotation-serach/quotation-serach.component';
import { QuotationDetailComponent } from './quotation-detail/quotation-detail.component';


@NgModule({
  declarations: [
    SearchComponent,
    QuotationSerachComponent,
    QuotationDetailComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotationDetailComponent } from './quotation-detail/quotation-detail.component';
import { SearchComponent } from './search.component';

const routes: Routes = [
  { path: '', component: SearchComponent, pathMatch: 'full' }, 
  { path: 'detail', component: QuotationDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }

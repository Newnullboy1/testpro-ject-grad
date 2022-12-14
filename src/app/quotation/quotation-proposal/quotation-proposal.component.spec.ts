import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationProposalComponent } from './quotation-proposal.component';

describe('QuotationProposalComponent', () => {
  let component: QuotationProposalComponent;
  let fixture: ComponentFixture<QuotationProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationProposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotationProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

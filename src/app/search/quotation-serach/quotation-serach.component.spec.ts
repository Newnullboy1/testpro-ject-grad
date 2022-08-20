import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationSerachComponent } from './quotation-serach.component';

describe('QuotationSerachComponent', () => {
  let component: QuotationSerachComponent;
  let fixture: ComponentFixture<QuotationSerachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationSerachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotationSerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

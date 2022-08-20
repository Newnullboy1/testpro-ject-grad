import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationSubmitedComponent } from './quotation-submited.component';

describe('QuotationSubmitedComponent', () => {
  let component: QuotationSubmitedComponent;
  let fixture: ComponentFixture<QuotationSubmitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationSubmitedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotationSubmitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

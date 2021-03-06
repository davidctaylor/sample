import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookDetailComponent } from './address-book-detail.component';

describe('SampleComponent', () => {
  let component: AddressBookDetailComponent;
  let fixture: ComponentFixture<AddressBookDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressBookDetailComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

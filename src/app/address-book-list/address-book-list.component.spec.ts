import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookListComponent } from './address-book-list.component';

describe('SampleComponent', () => {
  let component: AddressBookListComponent;
  let fixture: ComponentFixture<AddressBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressBookListComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

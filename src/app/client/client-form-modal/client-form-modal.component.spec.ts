import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormModalComponent } from './client-form-modal.component';

describe('ClientFormModalComponent', () => {
  let component: ClientFormModalComponent;
  let fixture: ComponentFixture<ClientFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

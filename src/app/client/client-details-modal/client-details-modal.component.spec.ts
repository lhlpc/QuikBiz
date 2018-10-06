import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsModalComponent } from './client-details-modal.component';

describe('ClientDetailsModalComponent', () => {
  let component: ClientDetailsModalComponent;
  let fixture: ComponentFixture<ClientDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

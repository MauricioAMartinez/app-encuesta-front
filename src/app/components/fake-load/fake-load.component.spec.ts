import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeLoadComponent } from './fake-load.component';

describe('FakeLoadComponent', () => {
  let component: FakeLoadComponent;
  let fixture: ComponentFixture<FakeLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

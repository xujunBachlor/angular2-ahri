import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhriComponent } from './ahri.component';

describe('AhriComponent', () => {
  let component: AhriComponent;
  let fixture: ComponentFixture<AhriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

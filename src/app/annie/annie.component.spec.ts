import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnieComponent } from './annie.component';

describe('AnnieComponent', () => {
  let component: AnnieComponent;
  let fixture: ComponentFixture<AnnieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

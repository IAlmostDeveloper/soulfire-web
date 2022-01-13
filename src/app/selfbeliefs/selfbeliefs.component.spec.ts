import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfbeliefsComponent } from './selfbeliefs.component';

describe('SelfbeliefsComponent', () => {
  let component: SelfbeliefsComponent;
  let fixture: ComponentFixture<SelfbeliefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfbeliefsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfbeliefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

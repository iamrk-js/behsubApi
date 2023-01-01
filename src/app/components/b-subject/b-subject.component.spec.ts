import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BSubjectComponent } from './b-subject.component';

describe('BSubjectComponent', () => {
  let component: BSubjectComponent;
  let fixture: ComponentFixture<BSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSubjectComponent } from './r-subject.component';

describe('RSubjectComponent', () => {
  let component: RSubjectComponent;
  let fixture: ComponentFixture<RSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

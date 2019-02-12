import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQInfoComponent } from './faqinfo.component';

describe('FAQInfoComponent', () => {
  let component: FAQInfoComponent;
  let fixture: ComponentFixture<FAQInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FAQInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

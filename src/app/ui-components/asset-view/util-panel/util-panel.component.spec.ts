import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UtilPanelComponent} from './util-panel.component';

describe('UtilPanelComponent', () => {
  let component: UtilPanelComponent;
  let fixture: ComponentFixture<UtilPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UtilPanelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

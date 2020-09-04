import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai4Component } from './bai4.component';

describe('Bai4Component', () => {
  let component: Bai4Component;
  let fixture: ComponentFixture<Bai4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

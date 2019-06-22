import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayquizzPage } from './playquizz.page';

describe('PlayquizzPage', () => {
  let component: PlayquizzPage;
  let fixture: ComponentFixture<PlayquizzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayquizzPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayquizzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

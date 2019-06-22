import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovasenhaPage } from './novasenha.page';

describe('NovasenhaPage', () => {
  let component: NovasenhaPage;
  let fixture: ComponentFixture<NovasenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovasenhaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovasenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

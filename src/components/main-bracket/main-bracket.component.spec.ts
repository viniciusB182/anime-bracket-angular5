/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainBracketComponent } from './main-bracket.component';

describe('MainBracketComponent', () => {
  let component: MainBracketComponent;
  let fixture: ComponentFixture<MainBracketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBracketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBracketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

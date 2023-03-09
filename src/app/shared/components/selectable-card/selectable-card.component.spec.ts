/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableCardComponent } from './selectable-card.component';

describe("SelectableCardComponent", () => {
  let component: SelectableCardComponent;
  let fixture: ComponentFixture<SelectableCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectableCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

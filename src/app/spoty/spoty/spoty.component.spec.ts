import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotyComponent } from './spoty.component';

describe('SpotyComponent', () => {
  let component: SpotyComponent;
  let fixture: ComponentFixture<SpotyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

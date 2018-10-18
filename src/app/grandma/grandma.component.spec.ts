import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandmaComponent } from './grandma.component';

describe('GrandmaComponent', () => {
  let component: GrandmaComponent;
  let fixture: ComponentFixture<GrandmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

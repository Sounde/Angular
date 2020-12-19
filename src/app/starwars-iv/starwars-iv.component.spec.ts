import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsIVComponent } from './starwars-iv.component';

describe('StarwarsIVComponent', () => {
  let component: StarwarsIVComponent;
  let fixture: ComponentFixture<StarwarsIVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarwarsIVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarsIVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

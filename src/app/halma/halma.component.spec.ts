import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalmaComponent } from './halma.component';

describe('HalmaComponent', () => {
  let component: HalmaComponent;
  let fixture: ComponentFixture<HalmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HalmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

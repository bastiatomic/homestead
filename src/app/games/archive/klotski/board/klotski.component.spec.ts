import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlotskiComponent } from './klotski.component';

describe('KlotskiComponent', () => {
  let component: KlotskiComponent;
  let fixture: ComponentFixture<KlotskiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KlotskiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KlotskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

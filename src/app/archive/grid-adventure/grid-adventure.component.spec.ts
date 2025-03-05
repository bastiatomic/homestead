import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAdventureComponent } from './grid-adventure.component';

describe('GridAdventureComponent', () => {
  let component: GridAdventureComponent;
  let fixture: ComponentFixture<GridAdventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridAdventureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});

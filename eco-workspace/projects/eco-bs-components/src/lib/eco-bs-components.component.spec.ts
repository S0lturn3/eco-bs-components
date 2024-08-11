import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoBsComponentsComponent } from './eco-bs-components.component';

describe('EcoBsComponentsComponent', () => {
  let component: EcoBsComponentsComponent;
  let fixture: ComponentFixture<EcoBsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoBsComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcoBsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

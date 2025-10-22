import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallingParticle } from './falling-particle';

describe('FallingParticle', () => {
  let component: FallingParticle;
  let fixture: ComponentFixture<FallingParticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FallingParticle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FallingParticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Safe } from './safe';

describe('Safe', () => {
  let component: Safe;
  let fixture: ComponentFixture<Safe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Safe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Safe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

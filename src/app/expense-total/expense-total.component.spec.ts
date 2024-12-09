import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTotalComponent } from './expense-total.component';

describe('ExpenseTotalComponent', () => {
  let component: ExpenseTotalComponent;
  let fixture: ComponentFixture<ExpenseTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseTotalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

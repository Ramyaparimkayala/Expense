import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpenseListComponent } from './expense-list.component';
import {CommonModule} from '@angular/common';

describe('ExpenseListComponent', () => {
  let component: ExpenseListComponent;
  let fixture: ComponentFixture<ExpenseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseListComponent, CommonModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ExpenseListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event to delete an expense', () => {
    spyOn(component.deleteExpense, 'emit');
    component.onDeleteExpense(1);

    expect(component.deleteExpense.emit).toHaveBeenCalledWith(1);
  });

  it('should emit an event to edit an expense', () => {
    spyOn(component.editExpense, 'emit');

    const expenseToEdit = {id:1, description: 'Expense', amount: 100, date: '2024-12-05'};
    component.onEditExpense(expenseToEdit);

    expect(component.editExpense.emit).toHaveBeenCalledWith(expenseToEdit);
  });

  it('should display the correct number of expense items', () => {
    component.expenses = [
      {id:1, description: 'Expense1', amount: 100, date: '2024-12-05'},
      {id:2, description: 'Expense2', amount:200, date: '2024-12-05'},
    ];

    fixture.detectChanges();

    const items = fixture.nativeElement.querySelectorAll('li');
    expect(items.length).toBe(2);
    expect(items[0].textContent).toContain('Expense1');
    expect(items[1].textContent).toContain('Expense2');
  });
});

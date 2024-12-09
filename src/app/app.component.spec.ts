import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseTotalComponent } from './expense-total/expense-total.component';


describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, AddExpenseComponent, ExpenseListComponent, ExpenseTotalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create the AppComponent', () => {
    expect(app).toBeTruthy();
  }); //checks whether the AppComponent is created or not

  it('should add a new expense', () => {
    const expense = {id:0, description: 'Expense1', amount: 100, date: '2024-12-04'};
    app.handleExpenseAdded(expense);
    expect(app.expenses.length).toBe(1);
    expect(app.expenses[0].description).toBe('Expense1');
  });

  it('should update existing expense', () => {
    app.expenses = [
      {id:0, description: 'Original Expense', amount:100, date:'2024-12-04' },
    ];
    const updatedExpense = {id:0, description: 'Updated Expense', amount: 150, date: '2024-12-05'};
    app.handleExpenseAdded(updatedExpense);

    expect(app.expenses.length).toBe(1);
    expect(app.expenses[0].description).toBe('Updated Expense');
    expect(app.expenses[0].amount).toBe(150);

    //expect(compiled.querySelector('h1')?.textContent).toContain('Hello, expense');
  });

  it('should calculate the total amount of expenses', () =>{
    app.expenses = [
      {id:0, description: 'Expense1', amount: 100, date: '2024-12-04'},
      {id:1, description: 'Expense2', amount: 200, date:'2024-12-05'},
    ];
    expect(app.getTotal()).toBe(300);
  });
});

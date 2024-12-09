import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { AddExpenseComponent } from './add-expense.component';
import {By} from '@angular/platform-browser';

describe('AddExpenseComponent', () => {
  let component: AddExpenseComponent;
  let fixture: ComponentFixture<AddExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExpenseComponent, FormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AddExpenseComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an entry when a new expense is added',()=>{
    spyOn(component.expenseAdded, 'emit'); //spys when expense is emitted
    component.newExpense = {id:0, description: 'Expense1', amount:100, date: '2024-12-04'};
    const form = fixture.debugElement.query(By.css('form')); //debugelement - provides specific methods for querying and interacting with DOM
    //query(By.css('form') - querying css for form element
    form.triggerEventHandler('ngSubmit', null); //simulates form submission

    expect(component.expenseAdded.emit).toHaveBeenCalledWith({
      id:0,
      description:'Expense1',
      amount: 100,
      date: '2024-12-04',
    });
  });
  
  it('should pupulate the form when editing an expense', () => {
  const expenseToEdit = { id: 1, description: 'Edit Expense', amount: 150, date: '2023-11-23' };
  component.selectedExpense = expenseToEdit;
  component.ngOnChanges({
    selectedExpense: {
      currentValue: expenseToEdit,
      firstChange: true,
      isFirstChange: () => true,
      previousValue: null,
    },
  });

  expect(component.newExpense.description).toBe('Edit Expense');
  expect(component.newExpense.amount).toBe(150);
  expect(component.newExpense.date).toBe('2023-11-23');
});

});

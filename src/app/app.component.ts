//standalone component - hence all the components are imported here itself else we use app.module to declare all the components and use service
//Root Component
//Acts as main controller
//Manages list of expenses and total calculation
//connects data

import { Component } from '@angular/core';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseTotalComponent } from './expense-total/expense-total.component';

@Component({
  selector: 'app-root',
  standalone: true, // Standalone component
  imports: [AddExpenseComponent, ExpenseListComponent, ExpenseTotalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  //expenses is an array that stores all the objects
  expenses: { id: number; description: string; amount: number; date: string }[] = [];
  selectedExpense: any = null; //holds expense that is currently being edited

  //triggers when AppExpenseComponent is called
  //incrememts ids 
  handleExpenseAdded(expense: any): void {
    
      // If the expense already has an ID, find and update it in the array
      const index = this.expenses.findIndex(e => e.id === expense.id);
      if (index !== -1) {
        this.expenses[index] = expense; //replace existing expense
      }
     else {
      // If it's a new expense, assign a new ID and add it to the array
      expense.id = this.expenses.length ? Math.max(...this.expenses.map(e => e.id)) + 1 : 1;
      this.expenses.push(expense);
    }
    this.selectedExpense = null; // Reset selectedExpense after adding or updating

  }
  
  handleDeleteExpense(id:number): void{
    this.expenses = this.expenses.filter(expense => expense.id!==id ); //removes the id that is deleted

  }

  handleEditExpense(expense: any): void{
    this.selectedExpense = {...expense }; //Clone selectedExpense
   // this.expenses = this.expenses.filter(e => e.id !==expense.id); //temporarily removes expense  
    // e -- each element of expenses array is passed to callback function
    //compares id of current element e to id of expense obj to function
  }
    //sum of all expenses amount
  getTotal(): number {
    return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }
}
//Displayes list of expenses

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-list',
  standalone: true, // Standalone component
  imports: [CommonModule], // Import CommonModule for *ngFor
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent {
  //receives expenses array from AppComponent
  @Input() expenses: { id: number; description: string; amount: number; date: string }[] = [];
  @Output() deleteExpense = new EventEmitter<number>();
  @Output() editExpense = new EventEmitter<any>();
  
  onDeleteExpense(id:number):void {
    this.deleteExpense.emit(id);
  }

  onEditExpense(expense:any):void {
    this.editExpense.emit(expense);
  }

}

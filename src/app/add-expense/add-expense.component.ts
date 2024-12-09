//Handles form submission
//provides form about the input details
import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  standalone: true, // Standalone component
  imports: [FormsModule], // Import FormsModule for two-way binding
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
})
export class AddExpenseComponent implements OnChanges {
  //emit expense to AppComponent
  @Input() selectedExpense: any = null; //receive selected expense for editing
  @Output() expenseAdded = new EventEmitter<any>();
  newExpense = { id: 0, description: '', amount: 0, date: new Date().toISOString().split('T')[0] };

  ngOnChanges(changes: SimpleChanges):void{
    if(changes['selectedExpense'] && this.selectedExpense) {
      this.newExpense = {...this.selectedExpense};
    }
  }

  addExpense(): void {
    if (this.newExpense.description && this.newExpense.amount > 0) {
      this.expenseAdded.emit(this.newExpense);
      this.newExpense = { id: 0, description: '', amount: 0, date: new Date().toISOString().split('T')[0] }; //reset the form to enter next input
    }
  }
}

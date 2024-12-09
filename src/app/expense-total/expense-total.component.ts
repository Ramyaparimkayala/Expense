//Displays total expenses

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expense-total',
  standalone: true,
  templateUrl: './expense-total.component.html',
  styleUrls: ['./expense-total.component.css'],
})
export class ExpenseTotalComponent {
  //receives total from getTotal
  @Input() total: number = 0; 
}


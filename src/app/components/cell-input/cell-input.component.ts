import { Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Cell } from '../../models/cell';

@Component({
  selector: 'app-cell-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cell-input.component.html',
  styleUrl: './cell-input.component.scss',
})
export class CellInputComponent {
  @Input() public cell: Cell;

  public value: number;

  public error$: Subject<boolean> = new Subject();

  public correct$: Subject<boolean> = new Subject();

  public checkValue() {
    if (+this.value !== this.cell.value) this.error$.next(true);
    else {
      this.correct$.next(true);
      this.error$.next(false);
    }
  }
}

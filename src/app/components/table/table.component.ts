import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';

import { Cell } from '../../models/cell';
import { CellInputComponent } from "../cell-input/cell-input.component";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule, CellInputComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements AfterViewInit {
  @Input() public cells: Cell[];

  public rows: Cell[][] = [];

  ngAfterViewInit() {
    for (let i = 1; i <= 9; i++)
      this.rows.push(this.cells.slice((i - 1) * 9, i * 9));
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  tmp = [
    [6, 8, 1, 5, 9, 4, 3, 2, 7],
    [5, 9, 7, 2, 8, 3, 4, 1, 6],
    [3, 4, 2, 6, 7, 1, 5, 8, 9],
    [9, 3, 4, 1, 5, 7, 2, 6, 8],
    [2, 7, 8, 9, 3, 6, 1, 4, 5],
    [1, 5, 6, 8, 4, 2, 9, 7, 3],
    [7, 2, 9, 3, 1, 8, 6, 5, 4],
    [8, 1, 3, 4, 6, 5, 7, 9, 2],
    [4, 6, 5, 7, 2, 9, 8, 3, 1],
  ];
}

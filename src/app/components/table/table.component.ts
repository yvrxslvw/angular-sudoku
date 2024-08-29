import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

import { Cell } from '../../models/cell';
import { CellInputComponent } from '../cell-input/cell-input.component';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule, CellInputComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  constructor(public readonly gameService: GameService) {}
}

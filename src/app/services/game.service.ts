import { Injectable } from '@angular/core';

import { Game } from '../models/game';
import { Cell } from '../models/cell';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public game: Game = new Game();

  public isGameOver: boolean = false;

  incrementError() {
    this.game.errorsCount++;
    if (this.game.errorsCount === 3) this.isGameOver = true;
  }

  incrementCorrect() {
    this.game.correctCount++;

    if (this.game.correctCount === this.game.totalCorrect)
      this.isGameOver = true;
  }

  restartGame() {
    this.isGameOver = false;
    Cell.count = 1;
    this.game = new Game();
  }

  showSolution() {
    this.game.rows.forEach((row) =>
      row.forEach((cell) => (cell.isShown = true))
    );
  }
}

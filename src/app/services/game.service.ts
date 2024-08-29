import { Injectable } from '@angular/core';

import { Game } from '../models/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public readonly game: Game = new Game();

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
}

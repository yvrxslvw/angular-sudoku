import { Cell } from './cell';
import { BASE_FIELD } from '../constants/baseField';

export class Game {
  public errorsCount: number = 0;

  public correctCount: number = 0;

  public totalCorrect: number = 0;

  private cells: Cell[] = [];

  public rows: Cell[][] = [];

  constructor() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 9; i++)
      arr.push(arr.splice(Math.random() * arr.length, 1)[0]);

    for (let i = 0; i < 81; i++)
      this.cells.push(new Cell(arr[+BASE_FIELD[i] - 1]));

    for (let i = 1; i <= 9; i++)
      this.rows.push(this.cells.slice((i - 1) * 9, i * 9));

    this.cells.forEach((cell) => !cell.isShown && this.totalCorrect++);
  }
}

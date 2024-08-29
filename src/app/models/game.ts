import { Cell } from './cell';
import { BASE_FIELD } from '../constants/baseField';

export class Game {
  public errorsCount: number = 0;

  public cells: Cell[] = [];

  constructor() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 9; i++)
      arr.push(arr.splice(Math.random() * arr.length, 1)[0]);

    for (let i = 0; i < 81; i++)
      this.cells.push(new Cell(arr[+BASE_FIELD[i] - 1]));
  }
}

export class Cell {
  public static count = 1;

  public readonly id: number;

  public readonly value: number;

  public isShown: boolean;

  constructor(value: number) {
    this.id = Cell.count;
    this.value = value;
    this.isShown = Math.random() * 10 > 5;
    Cell.count++;
  }
}

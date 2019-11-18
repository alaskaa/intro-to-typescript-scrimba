import { Animal } from "./animal.model";

export class Dog extends Animal {
  public paws: number;
  readonly name: string;
  private tail: boolean;

  constructor(data?: any) {
    super(data);
    this.paws = data.paws;
    this.name = data.name;
    this.tail = data.tail;
  }

  public add(num1, num2) {
    const result = num1 + num2;
    return result;
  }

  private addTwo(num1, num2): number {
    return num1 + num2;
  }
}

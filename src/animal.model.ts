export class Animal {
  protected type: string;

  protected constructor(data?: any) {
    this.type = data.type;
  }
}

// by default types are public

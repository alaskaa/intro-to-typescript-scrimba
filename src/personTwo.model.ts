export class PersonTwo {
  firstName: string;
  middleName: string;
  lastName: string;

  constructor(data?: any) {
    this.firstName = data.firstName || "Sibylle";
    this.lastName = data.lastName || "Sunshine";
    this.middleName = data.middleName || "Sehl";
  }
}

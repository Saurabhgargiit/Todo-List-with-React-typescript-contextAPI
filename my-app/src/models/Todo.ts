export class Todo {
  item: string;
  id: string;
  constructor(itemText: string) {
    this.item = itemText;
    this.id = new Date().toISOString();
  }
}

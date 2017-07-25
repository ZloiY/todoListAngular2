export  class Task {
  id: number;
  name: string;
  complete: boolean;

  constructor(id, name, complete) {
    this.id = id;
    this.name = name;
    this.complete = complete;
  }
}

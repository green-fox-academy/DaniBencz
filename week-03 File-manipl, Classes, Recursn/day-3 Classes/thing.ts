class Thing {
  private name: string;
  //changed original file here: give false as standard
  private completed: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  public complete() {
    this.completed = true;
  }
}

export { Thing };
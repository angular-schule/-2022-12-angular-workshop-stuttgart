export class Test {

  constructor(public zahl: number) {
    console.log('Hallo Angular! 😄', this.zahl);
    this.methode();
  }

  private methode() {
    console.log('Wurde aufgerufen!');
  }
}

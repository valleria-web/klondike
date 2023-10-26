class Klondike {
  constructor() {
    this.stock = new CardStack();
    this.waste = new CardStack();
    this.foundations = [];
    this.tableaus = [];
  }
}

export default Klondike;

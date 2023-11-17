import Card from "./Card.mjs";

class Stock {
  constructor() {
    this.cards = [];
  }

  populateStock() {
    this.cards = Card.createAndShuffleDeck();
  }
}

export default Stock;
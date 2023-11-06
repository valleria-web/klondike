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

// Debug:
//const stockTest = new Stock();
//stockTest.populateStock();
//console.log(stockTest.cards);
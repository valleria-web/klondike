//Stock.js
import Card from "./Card.js";

class Stock {
  constructor() {
    this.cards = this.createAndShuffleDeck();
  }

  createAndShuffleDeck() {
    const deck = [];
    for (const suit of Card.suits) {
      for (const value of Card.values) {
        const card = new Card(suit, value, false);
        deck.push(card);
      }
    }
    this.shuffleDeck(deck);
    return deck;
  }

  shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
}

export default Stock;

//DEBUG:
//const cardstack1 = new Stock();
//console.log(cardstack1)

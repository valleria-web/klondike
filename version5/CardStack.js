// CardStack.js

import { Card } from './Card.js';

export class CardStack {
  constructor() {
    this.cards = [];
  }

  push(card) {
    this.cards.push(card);
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  createDeck() {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];

    for (const suit of suits) {
      for (const value of values) {
        const card = new Card(suit, value, false);
        this.cards.push(card);
      }
    }

        // Agregar console.log para mostrar las cartas creadas
        console.log('Cartas creadas en el mazo:', this.cards);
  }
}

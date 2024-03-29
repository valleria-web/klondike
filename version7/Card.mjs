class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
    this.isFaceUp = isFaceUp;
  }

  toString() {
    return `${this.value} of ${this.suit}`;
  }

  flip() {
    this.isFaceUp = !this.isFaceUp;
  }

  static createAndShuffleDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const deck = [];

    for (const suit of suits) {
      for (const value of values) {
        deck.push(new Card(value, suit)); 
      }
    }

    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
  }
}

export default Card;



 
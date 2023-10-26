// Define la clase Card
class Card {
  constructor(suit, value, isFaceUp = false) {
    this.suit = suit;
    this.value = value;
    this.isFaceUp = isFaceUp;
  }

  flip() {
    this.isFaceUp = !this.isFaceUp;
  }
}

export default Card;

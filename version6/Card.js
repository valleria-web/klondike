// Define la clase Card
class Card {
  static suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  static values = [
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


//DEBUG:
//const card1 = new Card(Card.suits[0], Card.values[0]);
//console.log(card1.suit)
//console.log(card1.value)//

//const card2 = new Card(Card.suits[0], Card.values[0]);
//console.log(card2.suit)
//console.log(card2.value)
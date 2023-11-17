class Tableau {
  constructor() {
    this.tableaus = Array.from({ length: 7 }, () => []);
  }

  receiveCards(stock) {
    for (let i = 0; i < this.tableaus.length; i++) {
      const tableau = this.tableaus[i];
      if (tableau.length === i) {
        const card = stock.cards.shift();
        tableau.push(card);
        if (tableau.length === i + 1) {
          card.isFaceUp = true;
        }
      }
    }
  }

  distributeCardsATableaus(stock) {
    let currentCard = 0;
    for (let i = 0; i < this.tableaus.length; i++) {
      for (let j = 0; j <= i; j++) {
        if (currentCard < stock.cards.length) {
          const card = stock.cards[currentCard];
          if (j === i) {
            card.isFaceUp = true;
          }
          this.tableaus[i].push(card);
          currentCard++;
        }
      }
    }

    stock.cards.splice(0, currentCard);
  }

  canMoveCardToAnotherTableau(cardToMove, destinationTableau) {
    const topCard = destinationTableau[destinationTableau.length - 1];

    if (
      (topCard.suit === "Hearts" || topCard.suit === "Diamonds") &&
      (cardToMove.suit === "Clubs" || cardToMove.suit === "Spades")
    ) {
      const values = [
        "A",
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
      ];
      const topCardValueIndex = values.indexOf(topCard.value);
      const cardToMoveValueIndex = values.indexOf(cardToMove.value);

      if (cardToMoveValueIndex === topCardValueIndex - 1) {
        return true;
      }
    } else if (
      (topCard.suit === "Clubs" || topCard.suit === "Spades") &&
      (cardToMove.suit === "Hearts" || cardToMove.suit === "Diamonds")
    ) {
      const values = [
        "A",
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
      ];
      const topCardValueIndex = values.indexOf(topCard.value);
      const cardToMoveValueIndex = values.indexOf(cardToMove.value);

      if (cardToMoveValueIndex === topCardValueIndex - 1) {
        return true;
      }
    }

    return false;
  }
}

export default Tableau;


class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }

  flip() {
    this.isFaceUp = !this.isFaceUp;
  }

  toString() {
    return `${this.value} of ${this.suit}`;
  }

  static createAndShuffleDeck() {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
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

class Stock {
  constructor() {
    this.cards = [];
  }

  populateStock() {
    this.cards = Card.createAndShuffleDeck();
  }
}

const stock = new Stock();
stock.populateStock();

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

const tableau = new Tableau();
tableau.distributeCardsATableaus(stock);
console.log(tableau);
console.log(stock);

class TableauRenderer {
  constructor(tableau) {
    this.tableau = tableau;
  }

  renderTableausCards() {
    const tableauCardsList = document.getElementById("tableauCards");
    tableauCardsList.innerHTML = "";

    this.tableau.tableaus.forEach((tableauPile, index) => {
      const tableauElement = document.createElement("li");
      tableauElement.classList.add("tableau-pile");

      tableauPile.forEach((card, cardIndex) => {
        const cardElement = document.createElement("span");
        cardElement.textContent = card.isFaceUp
          ? `${card.value} of ${card.suit}`
          : "Face Down";
        cardElement.classList.add("card");

        cardElement.style.marginLeft = `${10 * cardIndex}px`;

        tableauElement.appendChild(cardElement);
      });

      tableauCardsList.appendChild(tableauElement);
    });
  }
}

const tableauRenderer = new TableauRenderer(tableau);
tableauRenderer.renderTableausCards();

class StockRenderer {
  static render(stock) {
    const stockCardsList = document.getElementById("stockCards");
    stockCardsList.innerHTML = "";

    stock.cards.forEach((card) => {
      const cardElement = document.createElement("li");
      cardElement.textContent = `${card.value} of ${card.suit}`;
      cardElement.classList.add("card");

      stockCardsList.appendChild(cardElement);
    });
  }
}

class Waste {
  constructor() {
    this.cards = [];
  }
  receiveCardFromStock(stock) {
    if (stock.cards.length > 0) {
      const card = stock.cards.pop();
      if (card instanceof Card) {
        this.cards.push(card);
      } else {
        console.error("Error: El objeto recibido no es una instancia de Card.");
      }
    }
  }
  flipLastCard() {
    if (this.cards.length > 0) {
      const lastCard = this.cards[this.cards.length - 1];
      if (lastCard instanceof Card) {
        lastCard.flip();
      } else {
        console.error("Error: La última carta no es una instancia de Card.");
      }
    }
  }
}
const waste = new Waste();
waste.receiveCardFromStock(stock);
console.log(waste);

class WasteController {
  constructor(waste, wasteRenderer) {
    this.waste = waste;
    this.wasteRenderer = wasteRenderer;
  } 
}


class WasteRenderer {
  constructor(waste) {
    this.waste = waste;
    this.wasteCardsList = document.getElementById("wasteCards");
  }

  renderWasteCards() {
    this.wasteCardsList.innerHTML = "";

    this.waste.cards.forEach((card, index) => {
      const cardElement = document.createElement("li");
      cardElement.textContent = `${card.value} of ${card.suit}`;
      cardElement.classList.add("card");
      cardElement.id = `wasteCard_${index}`; 

      this.wasteCardsList.appendChild(cardElement);
    });
  }
}

const wasteRenderer = new WasteRenderer(waste);
const wasteController = new WasteController(waste, wasteRenderer);
wasteRenderer.renderWasteCards();


class Foundation {
  constructor() {
    this.foundations = Array.from({ length: 4 }, () => []);
  }

  moveCardToFoundation(card, foundationIndex) {
    const foundationPile = this.foundations[foundationIndex];

    if (this.isMoveToFoundationValid(card, foundationPile)) {
      foundationPile.push(card);
      return true;
    } else {
      return false;
    }
  }

  isMoveToFoundationValid(card, foundationPile) {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

    if (foundationPile.length === 0 && card.value === "A") {
      return true;
    }

    const lastCard = foundationPile[foundationPile.length - 1];

    if (!lastCard) {
      return false;
    }

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

    const currentIndex = values.indexOf(lastCard.value);
    const nextIndex = values.indexOf(card.value);

    if (lastCard.suit === card.suit && nextIndex - currentIndex === 1) {
      return true;
    }

    return false;
  }

  isNextValueInFoundationInOrder(currentValue, nextValue) {
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
    const currentIndex = values.indexOf(currentValue);
    const nextIndex = values.indexOf(nextValue);
    return nextIndex - currentIndex === 1;
  }
}

StockRenderer.render(stock);

renderTableausCards();
renderStockCards();
renderWasteCards();
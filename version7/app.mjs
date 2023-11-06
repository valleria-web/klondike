class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
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
console.log(stock);

const stockCardsList = document.getElementById("stockCards");

function renderStockCards() {
  stockCardsList.innerHTML = "";

  stock.cards.forEach((card) => {
    const cardElement = document.createElement("li");
    cardElement.textContent = `${card.value} of ${card.suit}`;
    cardElement.classList.add("card");

    stockCardsList.appendChild(cardElement);
  });
}

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
};

const tableau = new Tableau();
tableau.distributeCardsATableaus(stock); // Pasar la baraja (stock) como argumento
console.log(tableau);

const tableauCardsList = document.getElementById("tableauCards");

function renderTableausCards() {
  tableauCardsList.innerHTML = "";

  tableau.tableaus.forEach((tableauPile, index) => {
    const tableauElement = document.createElement("li");
    tableauElement.classList.add("tableau-pile");

    tableauPile.forEach((card, cardIndex) => {
      const cardElement = document.createElement("span");
      cardElement.textContent = card.isFaceUp ? `${card.value} of ${card.suit}` : "Face Down";
      cardElement.classList.add("card");

      // Add some spacing between each card for visualization purposes
      cardElement.style.marginLeft = `${10 * cardIndex}px`;

      tableauElement.appendChild(cardElement);
    });

    tableauCardsList.appendChild(tableauElement);
  });
}

class Waste {
  constructor() {
    this.cards = new Array().fill(undefined);
  }
  receiveCardFromStock(stock) {
    if (stock.cards.length > 0) {
      const card = stock.cards.pop(); // Extrae la última carta del stock
      this.cards.push(card); // Agrega la carta al waste
    }
  }
}

const waste = new Waste();
waste.receiveCardFromStock(stock);
console.log(waste);

const wasteCardsList = document.getElementById("wasteCards");

function renderWasteCards() {
  wasteCardsList.innerHTML = "";

  waste.cards.forEach((card) => {
    const cardElement = document.createElement("li");
    cardElement.textContent = `${card.value} of ${card.suit}`;
    cardElement.classList.add("card");

    wasteCardsList.appendChild(cardElement);
  });
}


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
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  
    if (foundationPile.length === 0 && card.value === 'A') {
      return true;
    }
  
    const lastCard = foundationPile[foundationPile.length - 1];
  
    if (!lastCard) {
      return false;
    }
  
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  
    const currentIndex = values.indexOf(lastCard.value);
    const nextIndex = values.indexOf(card.value);
  
    if (lastCard.suit === card.suit && nextIndex - currentIndex === 1) {
      return true;
    }
  
    return false;
  }
  

  isNextValueInFoundationInOrder(currentValue, nextValue) {
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const currentIndex = values.indexOf(currentValue);
    const nextIndex = values.indexOf(nextValue);
    return nextIndex - currentIndex === 1;
  }
}


renderTableausCards();
renderStockCards();
renderWasteCards();


// DRAG AN DROP TO ISFACEUP:TRUE CARDS

function renderTableausCards() {
  tableauCardsList.innerHTML = "";

  tableau.tableaus.forEach((tableauPile, index) => {
    const tableauElement = document.createElement("li");
    tableauElement.classList.add("tableau-pile");

    tableauPile.forEach((card, cardIndex) => {
      const cardElement = document.createElement("span");
      cardElement.textContent = card.isFaceUp ? `${card.value} of ${card.suit}` : "Face Down";
      cardElement.classList.add("card");

      // Agregar la clase 'draggable' solo a las cartas que están boca arriba
      if (card.isFaceUp) {
        cardElement.classList.add("draggable");
        cardElement.setAttribute('draggable', 'true');
        cardElement.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', card.toString());
        });
      }

      // Resto del código para añadir las cartas al DOM
      // ...

      tableauElement.appendChild(cardElement);
    });

    tableauCardsList.appendChild(tableauElement);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const draggableCards = document.querySelectorAll('.draggable');

  draggableCards.forEach((card) => {
    card.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', card.textContent);
    });
  });

  const dropZones = document.querySelectorAll('.tableau-pile');

  dropZones.forEach((dropZone) => {
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      const data = e.dataTransfer.getData('text/plain');
      // Aquí debes manejar la lógica para mover la carta a la zona de destino
      // Implementar la lógica para verificar si el movimiento es válido, etc.
    });
  });
});

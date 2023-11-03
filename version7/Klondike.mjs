import Stock from "./Stock.mjs";
import Waste from "./Waste.mjs";
import Foundation from "./Foundation.mjs";
import Tableau from "./Tableau.mjs";

class Klondike {
  constructor() {
    this.stock = new Stock();
    this.waste = new Waste();
    this.foundation = new Foundation();
    this.tableau = new Tableau(this.stock);
  }

  populateStockInKlondike() {
    this.stock.populateStock();
  }

  distributeCards() {
    this.tableau.distributeCards(this.stock);
  }

  moveCardToFoundation(card, foundationIndex) {
    return this.foundation.moveCardToFoundation(card, foundationIndex);
  }

  isMoveToFoundationValid(card, foundationIndex) {
    return this.foundation.isMoveToFoundationValid(
      card,
      this.foundation.foundations[foundationIndex]
    );
  }

  isNextValueInFoundationInOrder(currentValue, nextValue) {
    return this.foundation.isNextValueInFoundationInOrder(
      currentValue,
      nextValue
    );
  }
}

export default Klondike;

// Debug:
//const klondikeGameTeste = new Klondike();
//klondikeGameTeste.populateStockInKlondike();
//klondikeGameTeste.distributeCards();
//console.log(klondikeGameTeste.stock);
//console.log(klondikeGameTeste.waste);
//console.log(klondikeGameTeste.foundation.foundations);
//console.log(klondikeGameTeste.tableau.tableaus);

// Debug:
const klondikeGameTeste = new Klondike();
klondikeGameTeste.populateStockInKlondike();
klondikeGameTeste.distributeCards();

for (let i = 0; i < klondikeGameTeste.tableau.tableaus.length; i++) {
  const testTableau = klondikeGameTeste.tableau.tableaus[i];
  const cardToMove = testTableau[testTableau.length - 1];
  console.log("Tableau:", i, testTableau);
  console.log("Card to move:", cardToMove);

  const foundationIndex = 0;
  const isMoveToFoundationValid = klondikeGameTeste.isMoveToFoundationValid(cardToMove, foundationIndex);

  if (isMoveToFoundationValid) {
    const moveResult = klondikeGameTeste.moveCardToFoundation(cardToMove, foundationIndex);
    if (moveResult) {
      console.log('La carta se ha movido a la Foundation con éxito.');
    } else {
      console.log('La carta no se pudo mover a la Foundation.');
    }
  } else {
    console.log('La carta no se puede mover a la Foundation según las reglas del juego.');
  }
}


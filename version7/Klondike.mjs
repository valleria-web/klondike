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



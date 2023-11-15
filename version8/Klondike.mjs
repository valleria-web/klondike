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
}

export default Klondike;

// Debug:
//const klondikeGameTeste = new Klondike();
//console.log(klondikeGameTeste.stock);
//console.log(klondikeGameTeste.waste);
//console.log(klondikeGameTeste.foundation.foundations);
//console.log(klondikeGameTeste.tableau.tableaus);



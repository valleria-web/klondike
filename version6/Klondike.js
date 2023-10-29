import Stock from "./Stock.js";
import Tableau from "./Tableau.js";
//import Foundation from "./Foundation.js";
//import Waste from "./Waste.js";

class Klondike {
  constructor() {
    this.stock = new Stock();
    //this.waste = new Waste(this.stock);
    //this.foundations = new Foundation(this.stock);
    this.tableaus = new Tableau(this.stock);
  }
}

const game = new Klondike();
console.log(game.stock);
console.log(game.tableaus.tableaus);
//console.log(game.stock);

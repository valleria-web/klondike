import Stock from './Stock.mjs';
import Waste from './Waste.mjs';
import Foundation from './Foundation.mjs';
import Tableau from './Tableau.mjs';

class Klondike {
  constructor() {
    this.stock = new Stock();
    this.waste = new Waste(); 
    this.foundation = new Foundation();
    this.tableau = new Tableau(this.stock);
  }

  populateStockInKlondike() {
    this.stock.populateStock(); // Llamar al método populateStock de la instancia de Stock en Klondike
  }

  distributeCards() {
    this.tableau.distributeCards(this.stock); // Llama al método de Tableau con la instancia de Stock
  }
}

export default Klondike;

//debug
const klondikeGame = new Klondike();
klondikeGame.populateStockInKlondike(); // Llama al método para poblar el mazo desde Klondike
klondikeGame.distributeCards()  // Llama al método para poblar los tableus desde Klondike
console.log(klondikeGame.stock);
console.log(klondikeGame.waste);
console.log(klondikeGame.foundation);
console.log(klondikeGame.tableau.tableaus);
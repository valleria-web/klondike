// Klondike.js
import CardStack from './CardStack.js';
import Foundation from './Foundation.js';
import Player from './Player.js';

class Klondike {
    constructor() {
        this.stock = new CardStack();
        this.waste = new CardStack();
        this.foundation = new Foundation(); // Asegúrate de que esté inicializado
        this.foundations = []; // Asegúrate de que esté inicializado
        this.tableaus = []; // Asegúrate de que esté inicializado
        this.player = new Player(); // Asegúrate de que esté inicializado
      }
  }

// Exporta la clase para que esté disponible en otros archivos.
export default Klondike;

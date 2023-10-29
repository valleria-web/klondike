import Stock from "./Stock.js"; // Importa la clase Stock

class Tableau {
  constructor(stock) {
    this.tableaus = Array.from({ length: 7 }, () => []);

    this.distributeCards(stock);
  }

  distributeCards(stock) {
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
}

export default Tableau;

//DEBUG:
//const stock = new Stock(); // Crea una instancia de Stock para obtener el mazo de cartas
//const tableaus = new Tableau(stock); // Crea una instancia de Tableau con los tableaus distribuidos automáticamente

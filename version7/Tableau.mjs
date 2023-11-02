import Stock from "./Stock.mjs";

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
}

export default Tableau;

//Debug: 
//const stock = new Stock();
//stock.populateStock();
//const tableau = new Tableau(stock);
//console.log(tableau.tableaus); 
import Card from "./Card.mjs";
import Stock from "./Stock.mjs";
import Tableau from "./Tableau.mjs";
import Foundation from "./Foundation.mjs";
import Waste from "./Waste.mjs";

const stock = new Stock();
stock.populateStock();

const testTableau = new Tableau();
testTableau.distributeCardsATableaus(stock);

const foundation = new Foundation();
for (let i = 0; i < testTableau.tableaus.length; i++) {
  const tableau = testTableau.tableaus[i];
  const cardToMove = tableau[tableau.length - 1];
  console.log("Tableau:", i, tableau);
  console.log("Card to move:", cardToMove);

  const foundationIndex = 0;

  const isMoveToFoundationValid = foundation.isMoveToFoundationValid(
    cardToMove,
    foundation.foundations[foundationIndex]
  );

  if (isMoveToFoundationValid) {
    const moveResult = foundation.moveCardToFoundation(
      cardToMove,
      foundationIndex
    );
    if (moveResult) {
      console.log("La carta se ha movido a la Foundation con éxito.");
    } else {
      console.log("La carta no se pudo mover a la Foundation.");
    }
  } else {
    console.log(
      "La carta no se puede mover a la Foundation según las reglas del juego."
    );
  }

  const destinationTableau = testTableau.tableaus[1]; // Pila de destino (Tableau[1])

  for (let i = 0; i < testTableau.tableaus.length; i++) {
    const tableau = testTableau.tableaus[i];
    const cardToMove = tableau[tableau.length - 1]; 
    console.log("Card to move to another secondTableau:", cardToMove);

    // Llama al método canMoveCardToAnotherTableau()
    testTableau.canMoveCardToAnotherTableau(cardToMove, destinationTableau);
  }
}

const waste = new Waste();
waste.receiveCardFromStock(stock);

console.log(foundation.foundations);
console.log(waste);
console.log(stock);

// Debug:
/**/

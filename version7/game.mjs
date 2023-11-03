import Klondike from "./Klondike.mjs";


// Debug:
//console.log(klondikeGameTeste.stock);
//console.log(klondikeGameTeste.waste);
//console.log(klondikeGameTeste.tableau.tableaus);


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
console.log(klondikeGameTeste.foundation.foundations);
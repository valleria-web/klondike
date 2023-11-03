class Foundation {
  constructor() {
    this.foundations = Array.from({ length: 4 }, () => []);
  }

  moveCardToFoundation(card, foundationIndex) {
    const foundationPile = this.foundations[foundationIndex];

    if (this.isMoveToFoundationValid(card, foundationPile)) {
      foundationPile.push(card);
      return true;
    } else {
      return false;
    }
  }

  isMoveToFoundationValid(card, foundationPile) {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  
    if (foundationPile.length === 0 && card.value === 'A') {
      return true;
    }
  
    const lastCard = foundationPile[foundationPile.length - 1];
  
    if (!lastCard) {
      return false;
    }
  
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  
    const currentIndex = values.indexOf(lastCard.value);
    const nextIndex = values.indexOf(card.value);
  
    if (lastCard.suit === card.suit && nextIndex - currentIndex === 1) {
      return true;
    }
  
    return false;
  }
  

  isNextValueInFoundationInOrder(currentValue, nextValue) {
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const currentIndex = values.indexOf(currentValue);
    const nextIndex = values.indexOf(nextValue);
    return nextIndex - currentIndex === 1;
  }
}

export default Foundation;

// Debug:
//const gameFoundation = new Foundation();
//const firstCard = { suit: "Hearts", value: "A" };
//const secondCard = { suit: "Hearts", value: "2" };
//
//const foundationIndex = 0;
//
//const isFirstMoveSuccessful = gameFoundation.moveCardToFoundation(
//  firstCard,
//  foundationIndex
//);
//
//if (isFirstMoveSuccessful) {
//  console.log("Primer movimiento exitoso.");
//
//  const foundationPile = gameFoundation.foundations[foundationIndex];
//
//  if (gameFoundation.isMoveToFoundationValid(secondCard, foundationPile)) {
//    const isSecondMoveSuccessful = gameFoundation.moveCardToFoundation(secondCard,foundationIndex);
//
//    if (isSecondMoveSuccessful) {
//      console.log(
//        "Segunda carta añadida a la parte superior de la primera carta en la Foundation."
//      );
//    } else {
//      console.log(
//        "La segunda carta no se puede colocar encima de la primera en la Foundation según las reglas del juego."
//      );
//    }
//  } else {
//    console.log(
//      "La segunda carta no se puede mover a la Foundation según las reglas del juego."
//    );
//  }
//
//  console.log("Foundation después de los movimientos:");
//  console.log(gameFoundation.foundations[foundationIndex]);
//} else {
//  console.log("Primer movimiento inválido.");
//}

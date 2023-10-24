// Stock.js

import { CardStack } from './CardStack.js';

const stock = new CardStack();
stock.createDeck();
stock.shuffle();

// Obtén una referencia al div del stock (VISTA)
const stockDiv = document.getElementById("stock");

// Recorre las cartas en el stock y crea elementos para representarlas
for (const card of stock.cards) {
  const cardElement = document.createElement("div");
  cardElement.textContent = card.suit + " " + card.value; // Puedes personalizar cómo se muestra la carta

  // Agrega la carta al div del stock
  stockDiv.appendChild(cardElement);
}

// Exporta la instancia de stock para que esté disponible en otros archivos
export const stockInstance = stock;

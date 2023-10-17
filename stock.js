// Define la clase Card
class Card {
    constructor(suit, value, isFaceUp) {
      this.suit = suit;
      this.value = value;
      this.isFaceUp = isFaceUp;
    }
  }
  
  // Define un array de objetos que representan las cartas
  const cards = [];
  
  // Define los palos y los valores de las cartas
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];
  
  // Genera todas las cartas y agrégalas al array cards
  for (const suit of suits) {
    for (const value of values) {
      const card = new Card(suit, value, false); // Cartas inicialmente boca abajo
      cards.push(card);
    }
  }
  
  // Baraja el mazo (cards) para que las cartas estén en orden aleatorio
  function shuffleStock(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  
    // Muestra las cartas en la consola después de barajar
    console.log("Cartas barajadas en el Stock:", deck);
  }
  
  // Llama a la función para barajar el mazo
  shuffleStock(cards);
  
  // Importa la función y la matriz de tableaus desde tableau.js
  import { repartirCartasEnTableaus, tableaus } from "./tableau.js";
  
  // Llama a la función para repartir las cartas en los 7 tableaus
  repartirCartasEnTableaus(tableaus, cards);
  
  // Muestra los tableaus en la consola
  console.log("Tableaus:", tableaus);
  
  // Exporta el array cards para que esté disponible en otros archivos
  export const stockCards = cards;
  

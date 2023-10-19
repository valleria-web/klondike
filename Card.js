// Define la clase Card
class Card {
  constructor(suit, value, isFaceUp) {
    this.suit = suit;
    this.value = value;
    this.isFaceUp = isFaceUp;
  }

  // Método para voltear una carta boca arriba
  flip() {
    this.isFaceUp = !this.isFaceUp;
  }

  // Método para verificar si esta carta puede apilarse sobre otra
  canStackOn(targetCard) {
    // Implementa las reglas específicas de Klondike aquí.
    // Verifica si las cartas tienen colores opuestos y si el valor de la carta actual
    // es una unidad menor que el valor de la carta objetivo.
    const colorOpposite =
      (this.suit === 'Hearts' || this.suit === 'Diamonds') &&
      (targetCard.suit === 'Clubs' || targetCard.suit === 'Spades') ||
      (this.suit === 'Clubs' || this.suit === 'Spades') &&
      (targetCard.suit === 'Hearts' || targetCard.suit === 'Diamonds');

    const valueOneLess = values.indexOf(this.value) === values.indexOf(targetCard.value) - 1;

    return colorOpposite && valueOneLess;
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


// Función para repartir cartas a los 7 tableaus según las reglas de Klondike
function repartirCartasEnTableaus(tableaus, stock) {
  let cartaActual = 0;
  for (let i = 0; i < tableaus.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (cartaActual < stock.length) {
        tableaus[i].push(stock[cartaActual]);
        cartaActual++;
      }
    }
  }
  // Elimina las cartas del stock
  stock.splice(0, cartaActual);
}
  
  // Crea una matriz de 7 tableaus (tableaus vacíos)
  const tableaus = [[], [], [], [], [], [], []];
  
// Llama a la función para repartir las cartas en los 7 tableaus
repartirCartasEnTableaus(tableaus, cards);

// Muestra los tableaus en la consola
console.log("Tableaus:", tableaus);

// Exporta el array cards para que esté disponible en otros archivos
export const stockCards = cards;

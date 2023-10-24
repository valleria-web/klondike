// Define los palos y los valores de las cartas
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = [
  "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"
];

// Crea una función para construir la baraja estándar
function createStandardDeck() {
  const deck = [];

  for (const suit of suits) {
    for (const value of values) {
      const card = {
        suit: suit,
        value: value
      };
      deck.push(card);
    }
  }

  return deck;
}

// Crea una baraja estándar de 52 cartas
const standardDeck = createStandardDeck();

// Muestra la baraja en la consola (opcional)
console.log("Baraja estándar de 52 cartas:", standardDeck);

// Ahora, `standardDeck` contiene una baraja estándar de 52 cartas con objetos que representan cada carta.

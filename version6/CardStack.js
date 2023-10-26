//CardStack.js
import Card from "./Card.js";

class Tableau {
  constructor() {
    this.cards = [];
  }

  push(card) {
    this.cards.push(card);
  }

  pop() {
    return this.cards.pop();
  }
}

const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

const stock = [];

for (const suit of suits) {
  for (const value of values) {
    const card = new Card(suit, value, false);
    stock.push(card);
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(stock);

console.log('Cartas en Stock:');
console.log(stock);

// Crea un array de 7 tableaus
const tableaus = Array.from({ length: 7 }, () => new Tableau());

function repartirCartasEnTableaus(tableaus, stock) {
  // Contador para llevar un registro de las cartas repartidas
  let cartaActual = 0;

  // Recorre los tableaus
  for (let i = 0; i < tableaus.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (cartaActual < stock.length) {
        const card = stock[cartaActual];
        // Asegúrate de que la última carta esté boca arriba
        if (j === i) {
          card.isFaceUp = true;
        }
        tableaus[i].push(card);
        cartaActual++;
      }
    }
  }

  // Elimina las cartas repartidas del stock
  stock.splice(0, cartaActual);

  // Muestra las cartas en los tableaus en la consola
  console.log('Cartas en Tableaus:');
  for (let i = 0; i < tableaus.length; i++) {
    console.log(`Tableau ${i}:`, tableaus[i].cards);
  }
}

// Llama a la función para repartir las cartas a los tableaus
repartirCartasEnTableaus(tableaus, stock);

console.log('Cartas despues de repartir en los tableaus:');
console.log(stock);
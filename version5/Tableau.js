// Tableau.js
import { Card } from './Card.js'; // Importa la clase Card

class Tableau {
  constructor() {
    this.cards = [];
  }

  push(card) {
    this.cards.push(card);
  }

  // Otros métodos relacionados con Tableau si es necesario
}

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
  console.log('Cartas en los Tableaus:', tableaus.map(tableau => tableau.cards));
}

const tableaus = Array.from({ length: 7 }, () => new Tableau());


// Exporta la función y la matriz de tableaus para que estén disponibles en otros archivos
export { repartirCartasEnTableaus, tableaus };

// Clase Tableau para representar un tableau en Klondike
class Tableau {
    constructor() {
      this.cards = []; // Un arreglo para almacenar las cartas en el tableau
    }
  
    // Método para agregar una carta al tableau
    push(card) {
      this.cards.push(card);
    }
  
    // Otros métodos relacionados con los tableaus si es necesario
  }
  
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
  const tableaus = Array.from({ length: 7 }, () => new Tableau());
  
  // Exporta la función y la matriz de tableaus para que estén disponibles en otros archivos
  export { repartirCartasEnTableaus, tableaus };
  
// tableau.js

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
  
  // Exporta la función y la matriz de tableaus para que estén disponibles en otros archivos
  export { repartirCartasEnTableaus, tableaus };
  
import Stock from "./Stock.mjs";

// Clase o función responsable de la representación visual (vista)
class StockRenderer {
  static render(stock) {
    const stockCardsList = document.getElementById("stockCards");
    stockCardsList.innerHTML = "";

    stock.cards.forEach((card) => {
      const cardElement = document.createElement("li");
      cardElement.textContent = `${card.value} of ${card.suit}`;
      cardElement.classList.add("card");

      stockCardsList.appendChild(cardElement);
    });
  }
}

// Uso de la clase Stock y la clase StockRenderer
//const stock = new Stock();
//stock.populateStock();
//StockRenderer.render(stock); // Renderizamos el stock visualmente

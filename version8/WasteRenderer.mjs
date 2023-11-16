class WasteRenderer {
  constructor(waste) {
    this.waste = waste;
    this.wasteCardsList = document.getElementById("wasteCards");
  }

  renderWasteCards() {
    this.wasteCardsList.innerHTML = "";

    this.waste.cards.forEach((card, index) => {
      const cardElement = document.createElement("li");
      cardElement.textContent = `${card.value} of ${card.suit}`;
      cardElement.classList.add("card");
      cardElement.id = `wasteCard_${index}`; // Unique ID for each card

      this.wasteCardsList.appendChild(cardElement);
    });
  }
}


//DEBUG:
/*
const waste = new Waste();
waste.receiveCardFromStock(stock);
console.log(waste);

const wasteRenderer = new WasteRenderer(waste);
const wasteController = new WasteController(waste, wasteRenderer);
wasteRenderer.renderWasteCards();

*/
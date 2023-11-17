class WasteView {
  constructor(waste) {
    this.waste = waste;
    this.wasteCardsList = document.getElementById("wasteCards");
    this.renderWasteCards(); 
  }

  renderWasteCards() {
    this.wasteCardsList.innerHTML = "";

    this.waste.cards.forEach((card, index) => {
      const cardElement = document.createElement("li");
      cardElement.textContent = `${card.value} of ${card.suit}`;
      cardElement.classList.add("card");
      cardElement.id = `wasteCard_${index}`;

      this.wasteCardsList.appendChild(cardElement);
    });
  }


  updateView() {
    this.renderWasteCards(); 
  }
}

export default WasteView;


class StockView {
  render(stock) {
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

export default StockView;
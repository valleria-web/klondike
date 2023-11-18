class StockController {
  constructor(stock, stockView, waste) {
    this.stock = stock;
    this.stockView = stockView;
    this.waste = waste;

    const stockCardsList = document.getElementById("stockCards");
    stockCardsList.addEventListener("click", this.handleStockClick.bind(this));

    this.stockView.render(this.stock);
  }

  handleStockClick(event) {
    const clickedCard = event.target;
    if (clickedCard.classList.contains("card")) {
      this.moveCardToWaste();
    }
  }

  moveCardToWaste(clickedCard) {
    const cardIndex = Array.from(clickedCard.parentElement.children).indexOf(clickedCard);
    if (cardIndex === this.stock.cards.length - 1) {
      const card = this.stock.cards.pop();
      this.waste.receiveCardFromStock(card);
      this.stockView.render(this.stock);
    }
  }

  updateStockView(newStockData) {
    this.stockView.render(newStockData);
  }
}

export default StockController;
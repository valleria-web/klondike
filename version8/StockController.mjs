class StockController {
  constructor(stock, stockView, wasteController) {
    this.stock = stock;
    this.stockView = stockView;
    this.wasteController = wasteController;

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

  moveCardToWaste() {
    if (this.stock.cards.length > 0) {
      const card = this.stock.cards.pop();
      this.wasteController.receiveCardFromStock(card); 
      this.stockView.render(this.stock);
    }
  }

  updateStockView(newStockData) {
    this.stockView.render(newStockData);
  }
}

export default StockController;
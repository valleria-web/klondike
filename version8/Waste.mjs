class Waste {
  constructor() {
    this.cards = new Array().fill(undefined);
  }
  receiveCardFromStock(stock) {
    if (stock.cards.length > 0) {
      const card = stock.cards.pop();
      this.cards.push(card);
    }
  }
  flipLastCard() {
    if (this.cards.length > 0) {
      const lastCard = this.cards[this.cards.length - 1];
      lastCard.flip(); // Voltea la última carta del Waste
    }
  }
}
export default Waste;

// Debug:
//const waste1 = new Waste();
//console.log(waste1);
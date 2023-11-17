class Waste {
  constructor() {
    this.cards = []; 
  }

  receiveCardFromStock(stock) {
    if (stock.cards && stock.cards.length > 0) {
      const lastCardIndex = stock.cards.length - 1;
      const card = stock.cards[lastCardIndex];
      stock.cards.splice(lastCardIndex, 1); 
      this.cards.push(card); 
    }
  }
  flipLastCard() {
    if (this.cards.length > 0) {
      const lastCard = this.cards[this.cards.length - 1];
      lastCard.flip(); 
    }
  }
}
export default Waste;

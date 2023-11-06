class Waste {
  constructor() {
    this.cards = new Array().fill(undefined);
  }
  receiveCardFromStock(stock) {
    if (stock.cards.length > 0) {
      const card = stock.cards.pop(); // Extrae la última carta del stock
      this.cards.push(card); // Agrega la carta al waste
    }
  }
}
export default Waste;

// Debug:
//const waste1 = new Waste();
//console.log(waste1);

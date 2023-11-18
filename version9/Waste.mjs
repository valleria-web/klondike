class Waste {
  constructor() {
    this.cards = []; 
  }


  receiveCard(card) {
    this.cards.push(card); 
  }

  flipLastCard() {
    if (this.cards.length > 0) {
      const lastCard = this.cards[this.cards.length - 1];
      lastCard.flip(); 
    }
  }
}
export default Waste;
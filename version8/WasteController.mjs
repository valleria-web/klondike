class WasteController {
  constructor(waste) {
    this.waste = waste;
    this.subscribers = []; 
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  receiveCardFromStock(card) {
    this.waste.receiveCardFromStock(card);
    this.notifySubscribers(); 
  }

  notifySubscribers() {
    this.subscribers.forEach(subscriber => {
      subscriber.updateView(); 
    });
  }
}

export default WasteController;

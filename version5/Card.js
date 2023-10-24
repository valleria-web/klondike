// Card.js

// Define la clase Card
export class Card {
    constructor(suit, value, isFaceUp) {
      this.suit = suit;
      this.value = value;
      this.isFaceUp = isFaceUp;
    }
  
    flip() {
      this.isFaceUp = !this.isFaceUp;
    }
  
    canStackOn(targetCard) {
      // Implementa la lógica para verificar si esta carta puede apilarse en targetCard
      // Esto depende de las reglas específicas del juego
      // Devuelve true o false en función de las reglas del juego
    }
  }
  
  
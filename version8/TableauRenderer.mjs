class TableauRenderer {
  constructor(tableau) {
    this.tableau = tableau;
  }

  renderTableausCards() {
    const tableauCardsList = document.getElementById("tableauCards");
    tableauCardsList.innerHTML = "";

    this.tableau.tableaus.forEach((tableauPile, index) => {
      const tableauElement = document.createElement("li");
      tableauElement.classList.add("tableau-pile");

      tableauPile.forEach((card, cardIndex) => {
        const cardElement = document.createElement("span");
        cardElement.textContent = card.isFaceUp
          ? `${card.value} of ${card.suit}`
          : "Face Down";
        cardElement.classList.add("card");

        cardElement.style.marginLeft = `${10 * cardIndex}px`;

        tableauElement.appendChild(cardElement);
      });

      tableauCardsList.appendChild(tableauElement);
    });
  }
}

//DEBUG:
/*
const tableau = new Tableau();
tableau.distributeCardsATableaus(stock);
console.log(tableau);

const tableauRenderer = new TableauRenderer(tableau);
tableauRenderer.renderTableausCards(); // Renderiza el tableau visualmente
*/
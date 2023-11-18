import Stock from './Stock.mjs';
import Tableau from './Tableau.mjs';
import TableauView from './TableauView.mjs';
import Foundation from './Foundation.mjs';
import Waste from './Waste.mjs';
import WasteView from './WasteView.mjs';
import StockView from './StockView.mjs';
import StockController from './StockController.mjs';
import WasteController from './WasteController.mjs'; 

const stock = new Stock();
stock.populateStock();
const stockView = new StockView();


const tableaus = new Tableau();
tableaus.distributeCardsATableaus(stock);
stockView.render(stock);

const tableauView = new TableauView(tableaus);
tableauView.renderTableausCards();


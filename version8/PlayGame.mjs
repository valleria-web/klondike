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
const tableau = new Tableau();
const tableauView = new TableauView(tableau);
const foundation = new Foundation();
const waste = new Waste();
const wasteView = new WasteView(waste);
const wasteController = new WasteController(waste); 
const stockView = new StockView();
const stockController = new StockController(stock, stockView, wasteController);

wasteController.subscribe(wasteView); 

stock.populateStock();
tableau.distributeCardsATableaus(stock);
wasteController.receiveCardFromStock(stock);
waste.flipLastCard();

tableauView.renderTableausCards();
wasteView.renderWasteCards();
stockView.render(stock);

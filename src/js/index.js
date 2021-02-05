import CalculatorModel from './model/CalculatorModel.js';
import CalculatorView from './view/CalculatorView.js';
import CalculatorController from './controller/CalculatorController.js';

new CalculatorController(new CalculatorModel(), new CalculatorView());

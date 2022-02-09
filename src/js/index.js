import Controller from "./controller/Controller.js";
import View from "./view/View.js";
import Model from "./model/Model.js";

const view = new View();
const model = new Model();
const controller = new Controller(view, model);

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.view.bindClickDigitButton(this.addUserInputCharacter.bind(this));
    this.view.bindClickOperationButton(this.clickOperationButton.bind(this));
    this.view.bindClickACButton(this.clickACButton.bind(this));
  }

  addUserInputCharacter(character) {
    this.view.render(this.model.addUserInputString(character));
  }

  clickOperationButton(operation) {
    if (operation === "=") {
      this.view.render(this.model.calculate());
      this.model.initializeUserInputString();

      return;
    }

    this.addUserInputCharacter(operation);
  }

  clickACButton() {
    this.view.render(0);
    this.model.initializeUserInputString();
  }
}

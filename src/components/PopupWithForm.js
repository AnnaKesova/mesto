import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit ) {
    super(popupSelector);
    this._popupFormCard = this._popup.querySelector(".form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = Array.from(
    this._popupFormCard.querySelectorAll(".form__item")
    );
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
   // console.log(inputValues)
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupFormCard.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    //console.log(this._handleFormSubmit)
  }

  close() {
    super.close();
    this._popupFormCard.reset();
  }
}

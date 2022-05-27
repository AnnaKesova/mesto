import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor( {popupSelector, handleFormSubmit}) {
    super(popupSelector);
   this._handleFormSubmit = handleFormSubmit;
    //this._confirmButton = confirmButton;
    this._formConfirm =  this._popup.querySelector('.form-confirm')
  }

  setEventListeners() {
    super.setEventListeners();
    this._formConfirm.addEventListener("submit", (evt) => {
      evt.preventDefault();
     this._handleFormSubmit();
    });
  }

  confirmDeleteMyCard(myCard) {

    this._handleFormSubmit = myCard;
   
  }
  /*getIdCard(card) {
    this._id = card._id;
    this._card = card;
  }*/
}

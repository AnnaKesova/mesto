import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
    constructor( handleFormSubmit, popupSelector) {
        super(popupSelector);
       // this._confirmPopup = document.querySelector(confirmPopup);    
this._handleFormSubmit = handleFormSubmit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._confirmPopup.addEventListener("submit", (evt) => {
          evt.preventDefault();
          this._handleFormSubmit();
        });
        //console.log(this._handleFormSubmit)
      }
    
}
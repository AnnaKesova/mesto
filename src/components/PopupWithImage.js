import Popup from "./Popup.js";
//поп-пап с картинкой
export default class PopupWithImage extends Popup {
  constructor({ popupSelector, imagePhoto, imageText }) {
    super(popupSelector);
    this._imagePhoto = document.querySelector(imagePhoto);
    this._imageText = document.querySelector(imageText);
  }
  // открытие поп-апа
  open(cardname, link) {
    this._imagePhoto.src = link;
    this._imagePhoto.alt = cardname;
    this._imageText.textContent = cardname;
    super.open();
  }
}

export { Card };
import { imagePhoto, imageText, imagePopup } from "../pages/index.js";
// класс создания карточки
class Card {
  //данные карточки и template
  constructor(data, cardSelector) {
    this._text = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const photoCard = document
      .querySelector(this._cardSelector)
      .content.querySelector(".photo")
      .cloneNode(true);

    return photoCard;
  }
  //присваеваем классы значениям карточек
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    // Добовляем данные
    const photoImage = this._element.querySelector(".photo__image");
    photoImage.src = this._image;
    photoImage.alt = this._text;
    this._element.querySelector(".photo__text").textContent = this._text;

    return this._element;
  }

  _setEventListeners() {
    // like
    this._element
      .querySelector(".photo__vector")
      .addEventListener("click", (evt) => {
        this._handleLikeClick(evt);
      });
    // bin
    this._element
      .querySelector(".photo__bin")
      .addEventListener("click", (evt) => {
        this._handleBinClick(evt);
      });
    // открытие картинки
    this._element
      .querySelector(".photo__image")
      .addEventListener("click", (evt) => {
        this._handlePreviewPicture(evt);
      });
  }
  // like
  _handleLikeClick(evt) {
    evt.target.classList.toggle("photo__vector_active");
  }
  //bin
  _handleBinClick() {
    this._element.remove();
  }
  // imagePopup
  _handlePreviewPicture() {
    imagePhoto.src = this._image;
    imagePhoto.alt = this._text;
    imageText.textContent = this._text;
    openPopup(imagePopup);
  }
}

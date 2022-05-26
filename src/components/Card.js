// класс создания карточки
export default class Card {
  //данные карточки и template
  #_userID;
  constructor({data, handleCardClick, handleBinClick}, cardSelector, userID) {
    this._text = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this.#_userID = userID;
   this.handleBinClick = handleBinClick;
  }

  _getTemplate() {
    const photoCard = document
      .querySelector(this._cardSelector)
      .content.querySelector(".photo")
      .cloneNode(true);

    return photoCard;
  }

  getID() {
    return this._id
  }
  //присваеваем классы значениям карточек
  generateCard() {
    this._element = this._getTemplate();
    // Добовляем данные
    this._photoImage = this._element.querySelector(".photo__image");
    this._setEventListeners();
    this._photoImage.src = this._image;
    this._photoImage.alt = this._text;
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
        this.handleBinClick(evt);
      });
    // открытие картинки
    this._photoImage.addEventListener("click", () => {
      this._handleCardClick(this._text, this._image);
    });
  }
  // like
  _handleLikeClick(evt) {
    evt.target.classList.toggle("photo__vector_active");
  }
  //bin
  /*handleBinClick() {
    this._element.remove();
  }*/
}

// класс создания карточки
export default class Card {
  //данные карточки и template
  constructor(
    { data, handleCardClick, handleBinClick, handleLikeClick },
    cardSelector,
    userId
  ) {
    this._text = data.name;
    this._image = data.link;
    this._id = data.id;
    this._likes = data.likes;
    this._ownerId = data.ownerId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._handleBinClick = handleBinClick;
    this._handleLikeClick = handleLikeClick;
    this._likeCounter = data.likeCounter;
  }

  _getTemplate() {
    const photoCard = document
      .querySelector(this._cardSelector)
      .content.querySelector(".photo")
      .cloneNode(true);

    return photoCard;
  }

  getId() {
    return this._id;
  }

  isLiked() {
    return  this._likes.some((item) => item._id === this._userId);
  }

  //присваеваем классы значениям карточек
  generateCard() {
    this._element = this._getTemplate();
    // Добовляем данные
    this._photoImage = this._element.querySelector(".photo__image");

    this._photoImage.src = this._image;
    this._photoImage.alt = this._text;
    this._element.querySelector(".photo__text").textContent = this._text;
    // bin
    this._binElement = this._element.querySelector(".photo__bin");
    if (this._ownerId === this._userId) {
      this._binElement.classList.add("photo__bin_active");
    }
    // like
    this._elementLikeButton = this._element.querySelector(".photo__vector");
   this._toggleLikesState()

    this._setEventListeners();
    return this._element;
  }
  
  setLikes(data) {
    this._likes = data.likes;
    this._toggleLikesState();
  }
  
  _toggleLikesState() {
    this._elementLikeCounter = this._element.querySelector(".photo__numlike");
    this._elementLikeCounter.textContent = this._likes.length;
    if (this.isLiked()) {
      this._elementLikeButton.classList.add("photo__vector_active");
    } else {
      this._elementLikeButton.classList.remove("photo__vector_active");

    }
  }

  //bin
  handleDeleteBinClick() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    // like
    this._elementLikeButton.addEventListener("click", (evt) => {
      this._handleLikeClick(evt);
    });
    // bin
    this._element.querySelector(".photo__bin").addEventListener("click", () => {
      this._handleBinClick();
    });
    // открытие картинки
    this._photoImage.addEventListener("click", () => {
      this._handleCardClick(this._text, this._image);
    });
  }
}

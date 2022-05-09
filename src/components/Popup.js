export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  //функция открытия поп-апов
  open() {
    document.addEventListener("keydown", this._handleEscClose);
    this._popup.classList.add("popup_active"); //функция для открытия поп-апа
  }
  //функция закрытия поп-апов
  close() {
    document.removeEventListener("keydown", this._handleEscClose);
    this._popup.classList.remove("popup_active"); //функция для закрытия
  }

  //закрытие поп-апа на escup
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  //слушатель для закрытия поп-апа на overlay и крестик

  setEventListeners() {
    this._popup.addEventListener("mousedown", (event) => {
      if (
        event.target === this._popup ||
        event.target.classList.contains("popup__close")
      ) {
        this.close();
      }
    });
  }
}

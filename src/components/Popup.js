export default class Popup {
    constructor (popupSelector) {
        this._popup = popupSelector;
    };

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
    __handleEscClose = (evt) => {
    evt.preventDefault;
    if (evt.key === "Escape") {
      const activePopup = document.querySelector(".popup_active");
      close(activePopup);
    }
  }; 

  //нет слушателя
}

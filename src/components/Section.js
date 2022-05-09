import { items } from "./utils.js";

export default class Section {
  constructor({ data, renderer }, cardsContainer) {
    this._renderItems = data;
    this._renderer = renderer;
    this._cardsContainer = cardsContainer;
    //console.log(data)
  }

  // добавленная карточка отрисовывается в начале
  addItem(cardElement) {
    this._cardsContainer.prepend(cardElement);
  }

  // создание карточки и её рендер
  renderItems() {
    items.forEach((item) => {
      const cardElement = this._renderer(item);
      this.addItem(cardElement);
      // console.log(this.addItem(cardElement))
    });
  }
}

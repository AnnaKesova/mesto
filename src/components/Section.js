import { items } from "./utils.js";

export class Section {
    constructor({ data, renderer }, cardsContainer) {
      this._renderItems = data;
      this._renderer = renderer;
      this._cardsContainer = cardsContainer;
    }

    // добавленная карточка отрисовывается в начале
    addItem(cardElement) {
    this._cardsContainer.prepend(cardElement);
  }

  // создание карточки и её рендер
  renderItems() {
    items.forEach((item) => {
      this._renderer(item);
    });
  };
  }
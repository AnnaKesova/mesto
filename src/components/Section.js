import { items } from "../utils/utils.js";

export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    //console.log(data)
  }

  // добавленная карточка отрисовывается в начале
  addItem(cardElement) {
    this._container.prepend(cardElement);
  }

  // создание карточки и её рендер
  renderItems() {
    items.forEach((item) => {
       this._renderer(item);
    });
  }
}
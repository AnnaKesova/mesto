export default class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
    //console.log(config.baseUrl);
  }

  _handlePromiseErr(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // получение данных пользователя
  getUserInfoFromApi() {
    return fetch(this._baseUrl + "/users/me", {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handlePromiseErr(res));
  }
  // получение картинок
  getInitialCards() {
    return fetch(this._baseUrl + "/cards", {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._handlePromiseErr(res));
  }

  //добавить нового пользователя
  addUserInfo(data) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => this._handlePromiseErr(res));
  }

  //Добавить новую картинку.
  addNewCard(data) {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => this._handlePromiseErr(res));
  }

  //добавить нового пользователя
  addUserAvatar(avatar) {
    return fetch(this._baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(avatar),
    }).then((res) => this._handlePromiseErr(res));
  }

  //Удалить новую картинку.
  deleteNewCard(id) {
    return fetch(this._baseUrl + `/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._handlePromiseErr(res));
  }

  //Добавить like картинке.
  putLikeCard(id) {
    return fetch(this._baseUrl + `/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._handlePromiseErr(res));
  }

  //Удалить like картинки.
  deleteLike(id) {
    return fetch(this._baseUrl + `/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._handlePromiseErr(res));
  }
}

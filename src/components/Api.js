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

    /*.then(res => res.json())
         .then((result) => {
        console.log(result);
  });*/
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
}


export default class Api {
    constructor(config) {
this._baseUrl = config.baseUrl;
this._headers = config.headers;
//console.log(config.baseUrl);
    }

    _handlePromiseErr(res) {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      }


   getUserInfoFromApi() {
        return fetch(this._baseUrl+'/users/me', {
           method: 'GET',
           headers: this._headers
          }) 
          .then((res) => this._handlePromiseErr(res))

          /*.then(res => res.json())
         .then((result) => {
        console.log(result);
  });*/
    }

    getInitialCards() {
        return fetch(this._baseUrl+'/cards', {
            method: 'GET',
            headers: this._headers
           }) 
           .then((res) => this._handlePromiseErr(res));
      }


    /*addUserInfo({name, about}) {
        return fetch(this._baseUrl+'/users/me', {
  method: 'PATCH',
  headers: this._headers,
  body: JSON.stringify({ name: name, about: about}), 
})
.then((res) => this._handlePromiseErr(res));
    }*/

    //Добавить новую карточку.
  addNewCard({name, link}) {
    return fetch(this._baseUrl+'/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({name:name, link:link})
    })
    /*.then((res) => {
    console.log(res); // если всё хорошо, получили ответ
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен');
  }); */
    //.then((res) => this._handlePromiseErr(res))
  }

}
   

    
    


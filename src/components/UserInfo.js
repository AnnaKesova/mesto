export default class UserInfo {
  constructor({ username, job, avatar }, api) {
    this._username = document.querySelector(username);
    this._job = document.querySelector(job);
    this._avatar = document.querySelector(avatar);
    this._api = api;
  }

  getUserInfo() {
    const inputUserInfo = {
      username: this._username.textContent,
      job: this._job.textContent,
    };
    return inputUserInfo;
  }
  getUserInfoApi() {
    this._api.getUserInfoFromApi()
    .then((userData) => {
    this._job.textContent = userData.about;
    this._username.textContent = userData.name;
    this._avatar.src = userData.avatar;
    this._idUser = userData._id
  console.log(userData.name)
  })
  .catch((err) => console.log(err));
  }

  /*setUserInfo(username, job) {
    this._api
    .addUserInfo({name: username, about: job})
    .then((item) => {
      this._job.textContent = item.username;
    this._username.textContent = item.job;
    console.log(this._api.addUserInfo)
    })
    .catch((err) => console.log(err));
    //this._job.textContent = job,
    //this._username.textContent = username;
   // this._avatar.src = avatar;
   console.log(item.name)
   console.log( setUserInfo())
  } */

/*  setUserInfo(userData) {
    this._job.textContent = userData.job,
    this._username.textContent = userData.username;
    this._avatar.src = userData.avatar;
  }*/

  getUserId() {
    return this._idUser
 }

 setUserId() {
   this._idUser
 }
}
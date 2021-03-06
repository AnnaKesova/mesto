export default class UserInfo {
  constructor({ username, job, avatar }) {
    this._username = document.querySelector(username);
    this._job = document.querySelector(job);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    const inputUserInfo = {
      username: this._username.textContent,
      job: this._job.textContent,
    };
    return inputUserInfo;
  }

  setUserInfo({ username, job, avatar }) {
    (this._job.textContent = job), (this._username.textContent = username);
    this._avatar.src = avatar;
  }

  getUserId() {
    return this._userId;
  }

  setUserId(id) {
    this._userId = id;
  }
}

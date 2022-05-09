export default class UserInfo {
  constructor({ username, job }) {
    this._username = document.querySelector(username);
    this._job = document.querySelector(job);
  }

  getUserInfo() {
    const inputUserInfo = {
      username: this._username.textContent,
      job: this._job.textContent,
    };
    return inputUserInfo;
  }

  setUserInfo(inputUserInfo) {
    this._job.textContent = inputUserInfo.job,
    this._username.textContent = inputUserInfo.username;
  }
}

import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { items } from "../utils/utils.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";
import Api from "../components/Api.js";

const profileOpenButton = document.querySelector(".popup-open"); //кнопка открытия поп-апа
const profileForm = document.querySelector(".form"); //Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector(".form__item_type_name"); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector(".form__item_type_job"); // Воспользуйтесь инструментом .querySelector()

const cardsPopup = document.querySelector(".popup-cards"); //поп-пап формы с картинками
const cardOpenButton = document.querySelector(".add-open"); //кнопка открытия формы поп-апа с картинками

//const cardsContainer = document.querySelector(".cards__elements"); // список контейнер
const formCard = cardsPopup.querySelector(".form-card"); //для создания карточки картинки

const obj = {
  formSelector: ".form",
  inputSelector: ".form__item",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "form__item-error_active",
  errorClass: "form__item_type_error",
};

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-41/",
  headers: {
    authorization: "cce2dc6d-fce0-4adb-80f6-8b8fce306754",
    "content-type": "application/json",
  },
});
/*const dataapi = api.getUserInfo();
console.log(dataapi.then(data).)*/

/*fetch('https://mesto.nomoreparties.co/v1/cohort-41/users/me', {
  headers: {
    authorization: 'cce2dc6d-fce0-4adb-80f6-8b8fce306754'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result.about);
  });*/

//валидация форм
const validityForm = new FormValidator(obj, profileForm);
const validityCard = new FormValidator(obj, formCard);

validityForm.enableValidation();
validityCard.enableValidation();

//поп-пап с картинкой, присвоение значений (это не волшебство)
const popupWithOpenImage = new PopupWithImage({
  popupSelector: ".popup-image",
  imagePhoto: ".popup__photo",
  imageText: ".popup__text",
});
// функция для открытия поп-папа картинки
const handleCardClick = (name, link) => {
  popupWithOpenImage.open(name, link);
};
popupWithOpenImage.setEventListeners();

//создание карточки и темплейта и функция открытия картинки
const createCard = (data) => {
  const card = new Card(data, ".card-template", handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};


// массив с карточками вставляем в проект

const renderCard = new Section(
  {
    data: items,

    renderer: (data) => {
      const cardElement = createCard(data);

      renderCard.addItem(cardElement);
    },
  },

  ".cards__elements"
);

renderCard.renderItems();



const dataInitials = api.getInitialCards();
dataInitials.then((result) => {
    // обрабатываем результат
    const renderCard = new Section(
      {
        data: result.map((item) => ({ name: item.name, link: item.link })),
        renderer: (data) => {
          const cardElement = createCard(data);
          //console.log(item)
          renderCard.addItem(cardElement);
        },
      },
      ".cards__elements"
    );

  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });



// открытие поп-апа добовления картинки
cardOpenButton.addEventListener("click", function () {
  validityCard.disableSubmitButton();
  popupWithCard.open();
});

function addCardApi() {
  api.addNewCard().then(({ name, link }) => {});
}
// поп-пап с картинкой
const popupWithCard = new PopupWithForm(".popup-cards", {
  handleFormSubmit: (data) => {
    api.addNewCard(data).then((res) => {
      renderCard.addItem(createCard(res));
      popupWithCard.close();
    });
  },
});

/*const handleFormSubmit = (data) => {
 data.link = data.link;
 data.name = data.name; 
}
console.log(data.link)*/

// поп-пап профиль
const userInfo = new UserInfo(
  {
    username: ".profile__name",
    job: ".profile__job",
    avatar: ".profile__avatar",
  },
  api
);

//получение данных для профиля
userInfo.getUserInfoApi();
//userInfo.setUserInfo()
/*function getUserInfoApi() {
  api.getUserInfoFromApi().then((userData) => {
    userData.job = userData.about;
    userData.username = userData.name;
    avatar.src = userData.avatar;
    userInfo.setUserInfo(userData);
    console.log(userData)
  })
  .catch((err) => console.log(err))
}
getUserInfoApi();
/*.then((userData) => {
  userInfo.getUserInfo()
  this._job.textContent = userData.about;
  this._username.textContent = userData.name;
  this._avatar.src = userData.avatar;
  //this._idUser = userData._id
console.log(userData.name)
})
.catch((err) => console.log(err));*/

/*function setUserInfoApi() {
  api.addUserInfo().then(({name, about}) => {
name = data.username;
about = data.about;
  })
}
setUserInfoApi()*/
//userInfo.setUserInfo()

//Сохранение данных для поп-апа формы профиль
profileOpenButton.addEventListener("click", function () {
  //
  validityForm.disableSubmitButton();

  const profileUserPopup = userInfo.getUserInfo();

  nameInput.value = profileUserPopup.username; //записываем данные в инпут из профайла
  jobInput.value = profileUserPopup.job;
  popupWithProfile.open();
});

const popupWithProfile = new PopupWithForm(".popup-form", {
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    popupWithProfile.close();
    console.log(handleFormSubmit);
  },
});

popupWithProfile.setEventListeners();
//popupWithCard.setEventListeners();

//console.log(setUserInfo)

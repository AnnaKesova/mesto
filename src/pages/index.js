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
const profileForm = document.querySelector(".form-profile");
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
const createCard = (item) => {
  const card = new Card(
    { data: item, handleCardClick },
    ".card-template",
    userInfo.getUserId()
  );
  const cardElement = card.generateCard();
  return cardElement;
};

// массив с карточками вставляем в проект
function cardRenderer(item) {
  const cardElement = createCard(item);
  renderCard.addItem(cardElement);
}

const renderCard = new Section(cardRenderer, ".cards__elements");

const initialcards = api
  .getInitialCards()
  .then((result) => {
    // обрабатываем результат
    const cardsInit = result.map((item) => ({
      name: item.name,
      link: item.link,
      id: item._id,
      ownerID: item.owner._id,
    }));
    return cardsInit;
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

// открытие поп-апа добовления картинки
cardOpenButton.addEventListener("click", function () {
  validityCard.disableSubmitButton();
  popupWithCard.open();
});

// поп-пап с картинкой
const popupWithCard = new PopupWithForm(".popup-cards", handleCardAddSubmit);

function handleCardAddSubmit({ link, name }) {
  api
    .addNewCard({  name, link })
    .then((data) => {
      renderCard.addItem(
        createCard({
          link: data.link,
          name: data.name,
          id: data._id,
          //ownerID: data.owner._id,
        })
      );
      popupWithCard.close();
    })
    .catch((err) => console.log(err));
}

// поп-пап профиль
const userInfo = new UserInfo({
  username: ".profile__name",
  job: ".profile__job",
  avatar: ".profile__avatar",
});

//получение данных для профиля
const getUserInfoApi = api
  .getUserInfoFromApi()
  .then((getUserInfoApi) => {
    return getUserInfoApi;
  })
  .catch((err) => console.log(err));

//Сохранение данных для поп-апа формы профиль
profileOpenButton.addEventListener("click", function () {
  validityForm.disableSubmitButton();
  const profileUserPopup = userInfo.getUserInfo();
  nameInput.value = profileUserPopup.username; //записываем данные в инпут из профайла
  jobInput.value = profileUserPopup.job;
  popupWithProfile.open();
});

const popupWithProfile = new PopupWithForm(".popup-form", handleFormSubmitUser);

function handleFormSubmitUser({username, job}) {
  api.addUserInfo({ name: username, about: job })
    .then((data) => {
      userInfo.setUserInfo({
        username: data.name,
        job: data.about,
        avatar: data.avatar,
      });
      popupWithProfile.close();
    })
    .catch((err) => console.log(err));
}
// промис для получения данных картинки и пользователя
Promise.all([initialcards, getUserInfoApi])
  .then(([cardsInit, getUserInfoApi]) => {
    renderCard.renderItems(cardsInit);
    userInfo.setUserId(getUserInfoApi._id);

    userInfo.setUserInfo({
      username: getUserInfoApi.name,
      job: getUserInfoApi.about,
      avatar: getUserInfoApi.avatar,
    });
    //console.log(getUserInfoApi)
  })
  .catch((err) => {
    console.log(err);
  });

// слушатели
popupWithProfile.setEventListeners();
popupWithCard.setEventListeners();
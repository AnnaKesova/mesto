import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { items } from "../utils/utils.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";

const profileOpenButton = document.querySelector(".popup-open"); //кнопка открытия поп-апа
const profileForm = document.querySelector(".form"); //Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector(".form__item_type_name"); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector(".form__item_type_job"); // Воспользуйтесь инструментом .querySelector()

const cardsPopup = document.querySelector(".popup-cards"); //поп-пап формы с картинками
const cardOpenButton = document.querySelector(".add-open"); //кнопка открытия формы поп-апа с картинками
const formCard = cardsPopup.querySelector(".form-card"); //для создания карточки картинки

const obj = {
  formSelector: ".form",
  inputSelector: ".form__item",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "form__item-error_active",
  errorClass: "form__item_type_error",
};

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
const handleCardClick = (cardname, link) => {
  popupWithOpenImage.open(cardname, link);
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

// поп-пап с картинкой
const popupWithCard = new PopupWithForm(".popup-cards", {
  handleFormSubmit: (data) => {
    renderCard.addItem(createCard(data));
    popupWithCard.close();
  },
});

// поп-пап профиль
const userInfo = new UserInfo({
  username: ".profile__name",
  job: ".profile__job",
});

const popupWithProfile = new PopupWithForm(".popup-form", {
  handleFormSubmit: (inputValues) => {
    userInfo.setUserInfo(inputValues);
    popupWithProfile.close();
  },
});

popupWithProfile.setEventListeners();
popupWithCard.setEventListeners();

//Сохранение данных для поп-апа формы профиль
profileOpenButton.addEventListener("click", function () {
  //
  validityForm.disableSubmitButton();

  const profileUserPopup = userInfo.getUserInfo();
  nameInput.value = profileUserPopup.username; //записываем данные в инпут из профайла

  jobInput.value = profileUserPopup.job;
  popupWithProfile.open();
});

// открытие поп-апа добовления картинки
cardOpenButton.addEventListener("click", function () {
  validityCard.disableSubmitButton();
  popupWithCard.open();
});

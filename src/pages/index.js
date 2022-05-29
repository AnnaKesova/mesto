import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";
import Api from "../components/Api.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import {
  profileOpenButton,
  profileForm,
  nameInput,
  jobInput,
  cardsPopup,
  cardOpenButton,
  formCard,
  avatarButton,
  avatarPopup,
  renderLoading,
} from "../utils/utils.js";

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

//валидация форм
const validityForm = new FormValidator(obj, profileForm);
const validityCard = new FormValidator(obj, formCard);
const validityAvatar = new FormValidator(obj, avatarPopup);

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

//попап согласия при удалении картинки
const popupConfirm = new PopupWithSubmit({ popupSelector: ".confirm-popup" });

//создание карточки и темплейта и функция открытия картинки
const createCard = (item) => {
  const card = new Card(
    {
      data: item,
      handleCardClick,
      handleBinClick: () => {
        popupConfirm.open();
        popupConfirm.confirmDeleteMyCard(() => {
          api
            .deleteNewCard(card.getId())
            .then(() => {
              card.handleDeleteBinClick();
              popupConfirm.close();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      },
      handleLikeClick: () => {
        const id = card.getId();
        const action = card.isLiked()
          ? api.deleteLike(id)
          : api.putLikeCard(id);
        action
          .then((data) => {
            card.setLikes(data);
          })
          .catch((err) => console.log(err));
      },
    },
    ".card-template",
    userInfo.getUserId()
  );
  return card.generateCard();
};

const cardsList = new Section(renderCard, ".cards__elements");

const initialcards = api
  .getInitialCards()
  .then((result) => {
    // обрабатываем результат
    const cardsInit = result.map((item) => ({
      name: item.name,
      link: item.link,
      id: item._id,
      ownerId: item.owner._id,
      likes: item.likes,
      likeCounter: item.likes.length,
    }));

    return cardsInit;
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

// поп-пап с картинкой
const popupWithCard = new PopupWithForm(".popup-cards", handleCardAddSubmit);

// поп-пап профиль
const userInfo = new UserInfo({
  username: ".profile__name",
  job: ".profile__job",
  avatar: ".profile__avatar",
});

//получение данных для профиля
const getUserInfoApi = api.getUserInfoFromApi();

const popupWithProfile = new PopupWithForm(".popup-form", handleFormSubmitUser);

// поппап изменения аватара.
const popupAvatar = new PopupWithForm(".popup-avatar", handleFormSubmitAvatar);

// массив с карточками вставляем в проект
function renderCard(item) {
  const cardElement = createCard(item);
  cardsList.addItem(cardElement);
}

function handleCardAddSubmit({ link, name }) {
  renderLoading("popup-cards", true);
  api
    .addNewCard({ name, link })
    .then((data) => {
      cardsList.addItem(
        createCard({
          link: data.link,
          name: data.name,
          id: data._id,
          ownerId: data.owner._id,
          likeCounter: data.likes.length,
          likes: data.likes,
        })
      );
      popupWithCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading("popup-cards", false);
    });
}

function handleFormSubmitAvatar({ avatar }) {
  renderLoading("popup-avatar", true);
  api
    .addUserAvatar({ avatar })
    .then((data) => {
      userInfo.setUserInfo({
        username: data.name,
        job: data.about,
        avatar: data.avatar,
      });
      popupAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading("popup-avatar", false);
    });
}

function handleFormSubmitUser({ username, job }) {
  renderLoading("popup-form", true);
  api
    .addUserInfo({ name: username, about: job })
    .then((data) => {
      userInfo.setUserInfo({
        username: data.name,
        job: data.about,
        avatar: data.avatar,
      });
      popupWithProfile.close();
    })

    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading("popup-form", false);
    });
}
// промис для получения данных картинки и пользователя
Promise.all([initialcards, getUserInfoApi])
  .then(([cardsInit, getUserInfoApi]) => {
    userInfo.setUserId(getUserInfoApi._id);
    cardsList.renderItems(cardsInit);
    userInfo.setUserInfo({
      username: getUserInfoApi.name,
      job: getUserInfoApi.about,
      avatar: getUserInfoApi.avatar,
    });
  })
  .catch((err) => {
    console.log(err);
  });

// слушатели

// открытие поп-апа добовления картинки
cardOpenButton.addEventListener("click", function () {
  validityCard.disableSubmitButton();
  popupWithCard.open();
});

//Сохранение данных для поп-апа формы профиль
profileOpenButton.addEventListener("click", function () {
  validityForm.disableSubmitButton();
  const { username, job } = userInfo.getUserInfo();
  nameInput.value = username; //записываем данные в инпут из профайла
  jobInput.value = job;
  popupWithProfile.open();
});

//открытие попапа с аватаром
avatarButton.addEventListener("click", function () {
  validityAvatar.disableSubmitButton();
  popupAvatar.open();
});

// 
validityForm.enableValidation();
validityCard.enableValidation();
validityAvatar.enableValidation();

popupWithOpenImage.setEventListeners();
popupConfirm.setEventListeners();
popupWithProfile.setEventListeners();
popupWithCard.setEventListeners();
popupAvatar.setEventListeners();

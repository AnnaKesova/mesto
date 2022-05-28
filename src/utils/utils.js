export {
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
};

const profileOpenButton = document.querySelector(".popup-open"); //кнопка открытия поп-апа
const profileForm = document.querySelector(".form-profile");
// Находим поля формы в DOM
const nameInput = document.querySelector(".form__item_type_username"); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector(".form__item_type_job"); // Воспользуйтесь инструментом .querySelector()

const cardsPopup = document.querySelector(".popup-cards"); //поп-пап формы с картинками
const cardOpenButton = document.querySelector(".add-open"); //кнопка открытия формы поп-апа с картинками

//const cardsContainer = document.querySelector(".cards__elements"); // список контейнер
const formCard = cardsPopup.querySelector(".form-card"); //для создания карточки картинки
const avatarButton = document.querySelector(".profile__edit-photo");
const avatarPopup = document.querySelector(".popup-avatar");

const renderLoading = (popup, isLoading = false) => {
  const currentActiveButton = document.querySelector(`.${popup} .popup__save`);
  if (isLoading) {
    currentActiveButton.textContent = "Загрузка...";
  } else {
    currentActiveButton.textContent = "Сохранить";
  }
};
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

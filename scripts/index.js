import { Card } from "./card.js";
export { imagePhoto, imageText, openPopup, imagePopup };
import { FormValidator } from "./validate.js";
import { initialCards } from "./utils.js";

const popupsWindows = document.querySelectorAll(".popup");
const profilePopup = document.querySelector(".popup-form"); // поп-пап с формой
const profileOpenButton = document.querySelector(".popup-open"); //кнопка открытия поп-апа
const profileForm = document.querySelector(".form"); //Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector(".form__item_type_name"); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector(".form__item_type_job"); // Воспользуйтесь инструментом .querySelector()
const profileName = document.getElementById("header");
const profilejob = document.getElementById("paragraph");
const cardsPopup = document.querySelector(".popup-cards"); //поп-пап формы с картинками
const cardOpenButton = document.querySelector(".add-open"); //кнопка открытия формы поп-апа с картинками

const cardCreateButton = cardsPopup.querySelector(".popup-cards__create"); // кнопка создания картинки из поп-апа
const formSaveButton = profilePopup.querySelector(".popup-form__save"); // кнопка сохранения формы из поп-апа

const cardsContainer = document.querySelector(".cards__elements"); // список контейнер
const formCardsName = cardsPopup.querySelector(".form__item_type_city"); //для создания карточки город
const formCardsLink = cardsPopup.querySelector(".form__item_type_link"); //для создания карточки ссылка
const formCard = cardsPopup.querySelector(".form-card"); //для создания карточки картинки
const imagePopup = document.querySelector(".popup-image"); // поп-пап открытия картинки
const imagePhoto = imagePopup.querySelector(".popup__photo"); // открытие картинки
const imageText = imagePopup.querySelector(".popup__text"); // открытие текста под картинкой

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

//функция открытия поп-апов
function openPopup(popup) {
  document.addEventListener("keydown", handleEscUp);
  popup.classList.add("popup_active"); //функция для открытия поп-апа
}

//функция закрытия поп-апов
function closePopup(popup) {
  document.removeEventListener("keydown", handleEscUp);

  popup.classList.remove("popup_active"); //функция для закрытия
}

//закрытие поп-апа на escup
const handleEscUp = (evt) => {
  evt.preventDefault;
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_active");
    closePopup(activePopup);
  }
};

// Закрытие popup кликом на overlay и клик на крестики поп-апа
const handleOverlay = (popup) => {
  popup.addEventListener("click", (event) => {
    if (
      event.target === event.currentTarget ||
      event.target.classList.contains("popup__close")
    ) {
      closePopup(popup);
    }
  });
};

// Перебор popup и закрываем при помощи клика на overlay
const renderPopupOverlay = (popupsWindows) => {
  popupsWindows.forEach((popup) => {
    handleOverlay(popup);
  });
};

renderPopupOverlay(popupsWindows);

// создание карточки и её рендер
const createCard = () => {
  initialCards.forEach((data) => {
    const card = renderCard(data);
    includeCard(card);
  });
};

const renderCard = (data) => {
  const card = new Card(data, ".card-template");
  const cardElement = card.generateCard();
  return cardElement;
};

// добавленная карточка отрисовывается в начале
function includeCard(cardElement) {
  cardsContainer.prepend(cardElement);
}

createCard();

// добавление новой карточки
const handleAddCard = (evt) => {
  evt.preventDefault();
  // рендируем создаваемую карточку и создаём переменную
  const newCard = renderCard(
    {
      name: formCardsName.value,
      link: formCardsLink.value,
    },
    cardsContainer
  );
  // добавляем новую карточку в начало
  includeCard(newCard);
  //очищаем форму
  formCard.reset();
  closePopup(cardsPopup);
};
formCard.addEventListener("submit", handleAddCard);

//renderCard(initialCards);

//Сохранение данных для поп-апа формы
profileOpenButton.addEventListener("click", function () {
  //
  validityForm.disableSubmitButton();
  nameInput.value = profileName.textContent; //записываем данные в инпут из профайла
  jobInput.value = profilejob.textContent;
  openPopup(profilePopup);
});

// Находим форму в DOM
// Обработчик «отправки» формы
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  profileName.textContent = nameInput.value;
  profilejob.textContent = jobInput.value;

  //console.log(profileName.textContent);
  //console.log(profilejob.textContent);
  // Вставьте новые значения с помощью textContent
  closePopup(profilePopup);
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener("submit", handleProfileFormSubmit);

//renderCard(initialCards);
validityForm.enableValidation();
validityCard.enableValidation();

// открытие поп-апа добовления картинки
cardOpenButton.addEventListener("click", function () {
  validityCard.disableSubmitButton();
  openPopup(cardsPopup);
});

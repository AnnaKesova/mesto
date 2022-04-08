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

const cardCreateButton = cardsPopup.querySelector(".popup-cards__create");// кнопка создания картинки из поп-апа
const formSaveButton = profilePopup.querySelector(".popup-form__save");// кнопка сохранения формы из поп-апа

const cardsContainer = document.querySelector(".cards__elements"); // список контейнер
const formCardsName = cardsPopup.querySelector(".form__item_type_city"); //для создания карточки город
const formCardsLink = cardsPopup.querySelector(".form__item_type_link"); //для создания карточки ссылка
const formCard = cardsPopup.querySelector(".form-card"); //для создания карточки картинки
const imagePopup = document.querySelector(".popup-image"); // поп-пап открытия картинки
const imagePhoto = imagePopup.querySelector(".popup__photo"); // открытие картинки
const imageText = imagePopup.querySelector(".popup__text"); // открытие текста под картинкой

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

//функция создания карточки
const createCard = (initialCards) => {
  const templatePhoto = document.querySelector("#template-photo").content;
  const photoCard = templatePhoto.querySelector(".photo").cloneNode(true);
  const photoImage = photoCard.querySelector(".photo__image");
  photoImage.src = initialCards.link;
  photoImage.alt = initialCards.name;
  photoCard.querySelector(".photo__text").textContent = initialCards.name;

  //функция like
  const vectorButton = photoCard.querySelector(".photo__vector");
  vectorButton.addEventListener("click", (event) => {
    vectorButton.classList.toggle("photo__vector_active");
  });

  //функция удаления карточки
  const photoBinButton = photoCard.querySelector(".photo__bin");
  photoBinButton.addEventListener("click", (event) => {
    event.target.closest(".photo").remove();
  });

  //открытие поп-апа с картинкой
  photoImage.addEventListener("click", function () {
    // console.log(photoImage.alt);
    imagePhoto.src = photoImage.src;
    imagePhoto.alt = photoImage.alt;
    imageText.textContent = photoImage.alt;
    openPopup(imagePopup);
  });

  return photoCard;
};

//массив
function renderInitialCards(initialCards) {
  initialCards.forEach((item) => {
    cardsContainer.prepend(createCard(item));
  });
}

renderInitialCards(initialCards);

//функция создания карточки с помощью поп-апа
function addCard(evt) {
  evt.preventDefault();
  cardsContainer.prepend(
    createCard({ name: formCardsName.value, link: formCardsLink.value })
  );
  formCard.reset();
  closePopup(cardsPopup);
}
formCard.addEventListener("submit", addCard);

//Сохранение данных для поп-апа формы
profileOpenButton.addEventListener("click", function () {
  //
  disableSubmitButton(formSaveButton, obj.inactiveButtonClass);
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

cardOpenButton.addEventListener("click", function () {
  disableSubmitButton(cardCreateButton, obj.inactiveButtonClass);
  openPopup(cardsPopup);
}); // открытие поп-апа добовления картинки

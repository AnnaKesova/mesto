const popup = document.querySelector('.popup');

const openPopup = document.querySelector('.popup-open');//кнопка открытия поп-апа
const closePopup = popup.querySelector('.popup__close');//кнопка закрытия поп-апа
let formElement = document.querySelector('.form');//Воспользуйтесь методом querySelector()
// Находим 6поля формы в DOM
let nameInput = document.querySelector(".form__item_type_name") ;// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector(".form__item_type_job");// Воспользуйтесь инструментом .querySelector()
let profileName = document.getElementById('header');
let profilejob = document.getElementById('paragraph');

const popupCards = document.querySelector('.popup-cards');
const addOpen = document.querySelector('.add-open');
const addClose = document.querySelector('.popup-cards__close');
let formCards = document.querySelector('.form-cards');
const cardsContainer = document.querySelector('.cards__elements');
let formCardsName = popupCards.querySelector('.form-cards_type_name');
let formCardsLink = popupCards.querySelector('.form-cards_type_link');
const formCard = popupCards.querySelector('.form-card');
const PopupImage = document.querySelector('.popup-image');
const PopupImageClose = PopupImage.querySelector('.popup-image__close');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  //функция создания карточки
  const createCard = (initialCards) => {
    const templatePhoto = document.querySelector('#template-photo').content;
    const photoCard = templatePhoto.querySelector('.photo').cloneNode(true);
    photoCard.querySelector('.photo__image').src = initialCards.link;
    photoCard.querySelector('.photo__image').alt = initialCards.name;
    photoCard.querySelector('.photo__text').textContent = initialCards.name;

    

    // Клонируем шаблон, наполняем его информацией из объекта data, навешиваем всякие обработчики событий, о которых будет инфа ниже
    // Возвращаем получившуюся карточку
    return photoCard; 
  };
  //массив
  function renderInitialCards(initialCards) {
    initialCards.forEach((item) => {
      cardsContainer.prepend(createCard(item));
    })
  }
   
  renderInitialCards(initialCards);
//функция создания карточки с помощью поп-апа
  function submitCard (evt) {
    evt.preventDefault();
    cardsContainer.prepend(createCard({name: formCardsName.value, 
     link: formCardsLink.value}));
   
    
    addpopupclose();
  }

  //removeBin()
 
 formCard.addEventListener('submit', submitCard);
//функция like
 document.body.addEventListener('click', (event) =>{
  const vector = event.target.closest(".photo__vector");

  if (!vector) {
    return;
  }
  vector.classList.toggle('photo__vector_active');
 });

//функция удаления карточки
document.body.addEventListener('click', (event) => {
  const photoBin = event.target.closest('.photo__bin');
  const photoElement = event.target.closest('.photo');
  if (!photoBin) {
    return
  }
  photoElement.remove();
}); 

function popupopen () {
    popup.classList.add('popup_active');//функция для открытия поп-апа
    nameInput.value = profileName.textContent; //записываем данные в инпут из профайла
     jobInput.value = profilejob.textContent;
}

openPopup.addEventListener('click', popupopen);// по клику присваевается класс открытия   

function popupclose () {
    popup.classList.remove('popup_active');//функция для закрытия 
}

closePopup.addEventListener('click', popupclose); 
// Находим форму в DOM
// Обработчик «отправки» формы
function SubmitButtonSave (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
   // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей

    profileName.textContent = nameInput.value; 
    profilejob.textContent = jobInput.value;
     
     //console.log(profileName.textContent);
     //console.log(profilejob.textContent);
    // Вставьте новые значения с помощью textContent
    popupclose ();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

formElement.addEventListener('submit', SubmitButtonSave);

function addpopupopen () {
    popupCards.classList.add('popup-cards_active');//функция для открытия поп-апа
}

addOpen.addEventListener('click', addpopupopen);// по клику присваевается класс открытия

function addpopupclose () {
    popupCards.classList.remove('popup-cards_active');
}

addClose.addEventListener('click', addpopupclose);// закрытие поп-апа кнопки добавить фото
//открытие поп-апа с картинкой
function popupImage (event) {
  const photoImage = event.target.closest('.photo__image');
  if(!photoImage){
    return;
  }
  const Imagephoto = PopupImage.querySelector('.popup-image__photo');
  const ImageText = PopupImage.querySelector('.popup-image__text');
 Imagephoto.src = photoImage.src;
 Imagephoto.alt = photoImage.alt;
 ImageText.textContent = photoImage.alt;
  PopupImage.classList.add('popup-image_active');
}

document.body.addEventListener('click', popupImage);
//закрытие поп-апа с картинкой
function closepopupImage () {
  PopupImage.classList.remove('popup-image_active');
}
PopupImageClose.addEventListener('click', closepopupImage);
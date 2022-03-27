const popup = document.querySelector('.popup');

const openPopup = document.querySelector('.popup-open');//кнопка открытия поп-апа
const popupCloseButton = popup.querySelector('.popup__close');//кнопка закрытия поп-апа
const profileForm = document.querySelector('.form');//Воспользуйтесь методом querySelector()
// Находим 6поля формы в DOM
const nameInput = document.querySelector(".form__item_type_name") ;// Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector(".form__item_type_job");// Воспользуйтесь инструментом .querySelector()
const profileName = document.getElementById('header');
const profilejob = document.getElementById('paragraph');

const popupCards = document.querySelector('.popup-cards');
const addOpenButton = document.querySelector('.add-open');
const addCloseButton = document.querySelector('.popup-cards__close');
const formCards = document.querySelector('.form-cards');
const cardsContainer = document.querySelector('.cards__elements');
const formCardsName = popupCards.querySelector('.form__item_type_city');
const formCardsLink = popupCards.querySelector('.form__item_type_link');
const formCard = popupCards.querySelector('.form-card');
const popupImage = document.querySelector('.popup-image');
const popupImageClose = popupImage.querySelector('.popup-image__close');

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

    //функция like
    photoCard.addEventListener('click', (event) =>{
    const vectorButton = event.target.closest(".photo__vector");
    if (!vectorButton) {
    return;
    }
    vectorButton.classList.toggle('photo__vector_active');
    });

    //функция удаления карточки
    const photoBinButton = photoCard.querySelector('.photo__bin');
    photoBinButton.addEventListener('click', (event) => {
     event.target.closest('.photo').remove();
    }); 

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
   
     formCard.reset();
   
    addpopupclose();
  }
 
 formCard.addEventListener('submit', submitCard);
 
 //функция открытия поп-апов
  function openPopup() {
  popup.classList.add('popup_active'); //функция для открытия поп-апа
}
 openPopup.addEventListener('click', openPopup);// по клику присваевается класс открытия   

/*function popupopen () {
    popup.classList.add('popup_active');//функция для открытия поп-апа
    nameInput.value = profileName.textContent; //записываем данные в инпут из профайла
     jobInput.value = profilejob.textContent;
}

openPopup.addEventListener('click', popupopen);// по клику присваевается класс открытия   

function popupclose () {
    popup.classList.remove('popup_active');//функция для закрытия 
}

popupCloseButton.addEventListener('click', popupclose); */
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

profileForm.addEventListener('submit', SubmitButtonSave);

function addpopupopen () {
    popupCards.classList.add('popup-cards_active');//функция для открытия поп-апа
}

addOpenButton.addEventListener('click', addpopupopen);// по клику присваевается класс открытия

function addpopupclose () {
    popupCards.classList.remove('popup-cards_active');
}

addCloseButton.addEventListener('click', addpopupclose);// закрытие поп-апа кнопки добавить фото
//открытие поп-апа с картинкой
function openPopupImage (event) {
  const photoImage = event.target.closest('.photo__image');
  if(!photoImage){
    return;
  }
  const Imagephoto = popupImage.querySelector('.popup-image__photo');
  const ImageText = popupImage.querySelector('.popup-image__text');
 Imagephoto.src = photoImage.src;
 Imagephoto.alt = photoImage.alt;
 ImageText.textContent = photoImage.alt;
  popupImage.classList.add('popup-image_active');
}

document.body.addEventListener('click', openPopupImage);
//закрытие поп-апа с картинкой
function closePopupImage () {
  popupImage.classList.remove('popup-image_active');
}
popupImageClose.addEventListener('click', closePopupImage);

const popup = document.querySelector('.popup');

const popupForm = document.querySelector('.popup-form');// поп-пап с формой
const popupFormButton = document.querySelector('.popup-open');//кнопка открытия поп-апа
const popupCloseButton = popup.querySelector('.popup__close');//кнопка закрытия поп-апа
const profileForm = document.querySelector('.form');//Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector(".form__item_type_name") ;// Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector(".form__item_type_job");// Воспользуйтесь инструментом .querySelector()
const profileName = document.getElementById('header');
const profilejob = document.getElementById('paragraph');

const popupCards = document.querySelector('.popup-cards');//поп-пап формы с картинками
const addOpenButton = document.querySelector('.add-open');//кнопка открытия формы поп-апа с картинками
const addCloseButton = popupCards.querySelector('.popup__close');// кнопка закрытия поп-апа с картинками

const cardsContainer = document.querySelector('.cards__elements');// список контейнер
const formCardsName = popupCards.querySelector('.form__item_type_city');//для создания карточки город
const formCardsLink = popupCards.querySelector('.form__item_type_link');//для создания карточки ссылка
const formCard = popupCards.querySelector('.form-card');//для создания карточки картинки
const popupImage = document.querySelector('.popup-image');// поп-пап открытия картинки
const popupImageButton = popupImage.querySelector('.popup-image__close');// кнопка закрытия поп-апа с картинкой
const imagePhoto = popupImage.querySelector('.popup__photo');// открытие картинки
const imageText = popupImage.querySelector('.popup__text');// открытие текста под картинкой


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

  //функция открытия поп-апов
  function openPopup(popup) {
    popup.classList.add('popup_active'); //функция для открытия поп-апа
  }
   //popupForm.addEventListener('click', openPopup);// по клику присваевается класс открытия   
    addOpenButton.addEventListener('click', () => openPopup (popupCards));// открытие поп-апа добовления картинки
  
   //функция закрытия поп-апов
 function closePopup (popup)  {
    popup.classList.remove('popup_active');//функция для закрытия
    }
    popupCloseButton.addEventListener('click', () => closePopup(popupForm)); 
    addCloseButton.addEventListener('click', () => closePopup(popupCards));
    popupImageButton.addEventListener('click', () => closePopup(popupImage));
  //функция создания карточки
    const createCard = (initialCards) => {
    const templatePhoto = document.querySelector('#template-photo').content
    const photoCard = templatePhoto.querySelector('.photo').cloneNode(true);
    const photoImage = photoCard.querySelector('.photo__image');
    photoImage.src = initialCards.link;
    photoImage.alt = initialCards.name;
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

    //открытие поп-апа с картинкой

    photoImage.addEventListener('click', function () {
     // console.log(photoImage.alt);
    imagePhoto.src = photoImage.src;
    imagePhoto.alt = photoImage.alt;
    imageText.textContent = photoImage.alt;
    openPopup(popupImage);
    
    });
    
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
 
   closePopup(popupCards);
}
formCard.addEventListener('submit', submitCard);
//Сохранение данных для поп-апа формы
popupFormButton.addEventListener('click', function () {
    openPopup(popupForm);
    nameInput.value = profileName.textContent; //записываем данные в инпут из профайла
     jobInput.value = profilejob.textContent;
});

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
    closePopup (popupForm);
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener('submit', SubmitButtonSave);


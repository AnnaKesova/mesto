const popup = document.querySelector('.popup');

const openPopup = document.querySelector('.popup-open');//кнопка открытия поп-апа
const closePopup = popup.querySelector('.popup__close');//кнопка закрытия поп-апа
let formElement = document.querySelector('.form');//Воспользуйтесь методом querySelector()
// Находим 6поля формы в DOM
let nameInput = document.querySelector(".form__item_type_name") ;// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector(".form__item_type_job");// Воспользуйтесь инструментом .querySelector()
let profileName = document.getElementById('header');
let profilejob = document.getElementById('paragraph');

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


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
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
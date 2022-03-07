const popup = document.querySelector('.popup');

const openPopup = document.querySelector('.popup-open');//кнопка открытия поп-апа
const closePopup = popup.querySelector('.popup__close');//кнопка закрытия поп-апа

function popuptoggle () {
    popup.classList.toggle('popup__opened');//функция для закрытия и открытия поп-апа
}

openPopup.addEventListener('click', popuptoggle); 

closePopup.addEventListener('click', popuptoggle); 
// Находим форму в DOM
let buttonSave = document.querySelector('.popup__submit'); 
let formElement = document.querySelector('.form');//Воспользуйтесь методом querySelector()
// Находим 6поля формы в DOM
let nameInput = document.querySelector("input[name=username]") ;// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector("input[name=job]");// Воспользуйтесь инструментом .querySelector()
let profileName = document.getElementById('header');
let profilejob = document.getElementById('paragraph');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не  будет
function SubmitButtonSave (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
   // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей


     usernameText = nameInput.value; 
     jobText = jobInput.value; 
     
   //  console.log(profileName.textContent);
   //  console.log(profilejob.textContent);

    profileName.textContent = usernameText; 
    profilejob.textContent = jobText; 
    // Вставьте новые значения с помощью textContent
    popup.classList.remove('popup__opened');
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', SubmitButtonSave);
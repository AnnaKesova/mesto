const obj = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'form__item-error_active',
  errorClass: 'form__item_type_error',
}


//показывает элемент ошибки
const showInputError = (formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
 // console.log(errorElement)
  inputElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(inputErrorClass); 
};
// скрывает элемент ошибки
const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  console.log(errorElement)
  inputElement.classList.remove(errorClass);
  errorElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
};

// проверка на валидность полей
const checkInputValidity = (formElement, inputElement, {inputErrorClass, errorClass}) => {
  if (!inputElement.validity.valid) {
    //console.log(inputElement.validationMessage)
    showInputError(formElement, inputElement, inputElement.validationMessage, {inputErrorClass, errorClass});
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
};

//функция примет параметром элемент формы и добавит её полям нужные обработчики
const setEventListeners = (formElement, inputSelector, {submitButtonSelector, inactiveButtonClass, ...rest}) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  //console.log(buttonElement)
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);

  inputList.forEach((inputElement) => {
    //console.log(inputSelector)
    //console.log(inputElement.id)
    inputElement.addEventListener('input', function () {
      //console.log(inputElement.validity)
      checkInputValidity(formElement, inputElement, rest);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

// функция перебора всех форм
function enableValidation ({formSelector, inputSelector, ...rest}) {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach(formElement=> {
    //console.log(formElement)
    formElement.addEventListener('submit', evt => evt.preventDefault())
 
  setEventListeners(formElement, inputSelector, rest);  
});
  
}
// проверка инпутов для кнопки
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
// функция блокировки кнопки
 const disableSubmitButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;
}

const enableSubmitButton = (buttonElement, inactiveButtonClass) =>{
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.disabled = false;
}

// функция переключения кнопки

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    disableSubmitButton(buttonElement, inactiveButtonClass)
  } else {
    // иначе сделай кнопку активной
    enableSubmitButton (buttonElement, inactiveButtonClass);
  }
};


enableValidation(obj);

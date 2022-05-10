
export class FormValidator {
  constructor(data, formList) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    //console.log(this._inputSelector)
    this._formList = formList;
    //console.log (formList)
    this._buttonElement = this._formList.querySelector(this._submitButtonSelector);
  }

  //показывает элемент ошибки
  _showInputError(inputElement) {
    const errorElement = this._formList.querySelector(
      `#${inputElement.id}-error`
    );
    // console.log(errorElement)
    inputElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._inputErrorClass);
  }

  // скрывает элемент ошибки
  _hideInputError(inputElement) {
    const errorElement = this._formList.querySelector(
      `#${inputElement.id}-error`
    );
    //console.log(errorElement);
    inputElement.classList.remove(this._errorClass);
    errorElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
  }

  // проверка инпутов для кнопки
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // функция блокировки кнопки
  disableSubmitButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);

    this._buttonElement.disabled = true;
    //console.log(this._buttonElement)
  }

  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  // функция переключения кнопки

  _toggleButtonState() {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput()) {
      // сделай кнопку неактивной
      this.disableSubmitButton();
    } else {
      // иначе сделай кнопку активной
      this._enableSubmitButton();
    }
  }

  // проверка на валидность полей
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      //console.log(inputElement.validationMessage)
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // функция перебора всех inputs форм
  enableValidation() {
    this._inputList = Array.from(
      this._formList.querySelectorAll(this._inputSelector)
    );
    //console.log(this._inputList)

    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
}

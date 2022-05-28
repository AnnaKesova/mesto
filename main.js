/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(config) {
    _classCallCheck(this, Api);

    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _createClass(Api, [{
    key: "_handlePromiseErr",
    value: function _handlePromiseErr(res) {
      return res.ok ? res.json() : Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
    } // получение данных пользователя

  }, {
    key: "getUserInfoFromApi",
    value: function getUserInfoFromApi() {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        method: "GET",
        headers: this._headers
      }).then(this._handlePromiseErr);
    } // получение картинок

  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch("".concat(this._baseUrl, "/cards"), {
        method: "GET",
        headers: this._headers
      }).then(this._handlePromiseErr);
    } //добавить нового пользователя

  }, {
    key: "addUserInfo",
    value: function addUserInfo(data) {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify(data)
      }).then(this._handlePromiseErr);
    } //Добавить новую картинку.

  }, {
    key: "addNewCard",
    value: function addNewCard(data) {
      return fetch("".concat(this._baseUrl, "/cards"), {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify(data)
      }).then(this._handlePromiseErr);
    } //добавить нового пользователя

  }, {
    key: "addUserAvatar",
    value: function addUserAvatar(avatar) {
      return fetch("".concat(this._baseUrl, "/users/me/avatar"), {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify(avatar)
      }).then(this._handlePromiseErr);
    } //Удалить новую картинку.

  }, {
    key: "deleteNewCard",
    value: function deleteNewCard(id) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(id), {
        method: "DELETE",
        headers: this._headers
      }).then(this._handlePromiseErr);
    } //Добавить like картинке.

  }, {
    key: "putLikeCard",
    value: function putLikeCard(id) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(id, "/likes"), {
        method: "PUT",
        headers: this._headers
      }).then(this._handlePromiseErr);
    } //Удалить like картинки.

  }, {
    key: "deleteLike",
    value: function deleteLike(id) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(id, "/likes"), {
        method: "DELETE",
        headers: this._headers
      }).then(this._handlePromiseErr);
    }
  }]);

  return Api;
}();



/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// класс создания карточки
var Card = /*#__PURE__*/function () {
  //данные карточки и template
  function Card(_ref, cardSelector, userId) {
    var _this = this;

    var data = _ref.data,
        handleCardClick = _ref.handleCardClick,
        handleBinClick = _ref.handleBinClick,
        handleLikeClick = _ref.handleLikeClick;

    _classCallCheck(this, Card);

    this._text = data.name;
    this._image = data.link;
    this._id = data.id;
    this._likes = data.likes;
    this._ownerId = data.ownerId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._handleBinClick = handleBinClick;
    this._handleLikeClick = handleLikeClick;
    this._likesUser = this._likes.some(function (item) {
      return item._id === _this._userId;
    });
    this._likeCounter = data.likeCounter;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var photoCard = document.querySelector(this._cardSelector).content.querySelector(".photo").cloneNode(true);
      return photoCard;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this._id;
    }
  }, {
    key: "isLiked",
    value: function isLiked() {
      return this._likesUser;
    } //присваеваем классы значениям карточек

  }, {
    key: "generateCard",
    value: function generateCard() {
      var _this2 = this;

      this._element = this._getTemplate(); // Добовляем данные

      this._photoImage = this._element.querySelector(".photo__image");
      this._photoImage.src = this._image;
      this._photoImage.alt = this._text;
      this._element.querySelector(".photo__text").textContent = this._text; // bin

      this._binElement = this._element.querySelector(".photo__bin");

      if (this._ownerId === this._userId) {
        this._binElement.classList.add("photo__bin_active");
      } // like


      this._elementLikeButton = this._element.querySelector(".photo__vector");

      if (this._likes.some(function (item) {
        return item._id === _this2._userId;
      })) {
        this._elementLikeButton.classList.add("photo__vector_active");
      }

      this._elementLikeCounter = this._element.querySelector(".photo__numlike");
      this._elementLikeCounter.textContent = this._likeCounter;

      this._setEventListeners();

      return this._element;
    } // like добавление или удаление

  }, {
    key: "toggleLikesState",
    value: function toggleLikesState(data) {
      this._elementLikeCounter.textContent = data.likes.length;
      this._likesUser = !this._likesUser;

      if (this.isLiked()) {
        this._elementLikeButton.classList.add("photo__vector_active");
      } else {
        this._elementLikeButton.classList.remove("photo__vector_active");
      }
    } //bin

  }, {
    key: "handleDeleteBinClick",
    value: function handleDeleteBinClick() {
      this._element.remove();

      this._element = null;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this3 = this;

      // like
      this._elementLikeButton.addEventListener("click", function (evt) {
        _this3._handleLikeClick(evt);
      }); // bin


      this._element.querySelector(".photo__bin").addEventListener("click", function () {
        _this3._handleBinClick();
      }); // открытие картинки


      this._photoImage.addEventListener("click", function () {
        _this3._handleCardClick(_this3._text, _this3._image);
      });
    }
  }]);

  return Card;
}();



/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidator": () => (/* binding */ FormValidator)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(data, formList) {
    _classCallCheck(this, FormValidator);

    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass; //console.log(this._inputSelector)

    this._formList = formList; //console.log (formList)

    this._buttonElement = this._formList.querySelector(this._submitButtonSelector);
  } //показывает элемент ошибки


  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(inputElement) {
      var errorElement = this._formList.querySelector("#".concat(inputElement.id, "-error")); // console.log(errorElement)


      inputElement.classList.add(this._errorClass);
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._inputErrorClass);
    } // скрывает элемент ошибки

  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      var errorElement = this._formList.querySelector("#".concat(inputElement.id, "-error")); //console.log(errorElement);


      inputElement.classList.remove(this._errorClass);
      errorElement.classList.remove(this._inputErrorClass);
      errorElement.textContent = "";
    } // проверка инпутов для кнопки

  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    } // функция блокировки кнопки

  }, {
    key: "disableSubmitButton",
    value: function disableSubmitButton() {
      this._buttonElement.classList.add(this._inactiveButtonClass);

      this._buttonElement.disabled = true; //console.log(this._buttonElement)
    }
  }, {
    key: "_enableSubmitButton",
    value: function _enableSubmitButton() {
      this._buttonElement.classList.remove(this._inactiveButtonClass);

      this._buttonElement.disabled = false;
    } // функция переключения кнопки

  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      // Если есть хотя бы один невалидный инпут
      if (this._hasInvalidInput()) {
        // сделай кнопку неактивной
        this.disableSubmitButton();
      } else {
        // иначе сделай кнопку активной
        this._enableSubmitButton();
      }
    } // проверка на валидность полей

  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        //console.log(inputElement.validationMessage)
        this._showInputError(inputElement);
      } else {
        this._hideInputError(inputElement);
      }
    } // функция перебора всех inputs форм

  }, {
    key: "enableValidation",
    value: function enableValidation() {
      var _this = this;

      this._inputList = Array.from(this._formList.querySelectorAll(this._inputSelector)); //console.log(this._inputList)

      this._toggleButtonState();

      this._inputList.forEach(function (inputElement) {
        inputElement.addEventListener("input", function () {
          _this._checkInputValidity(inputElement);

          _this._toggleButtonState();
        });
      });
    }
  }]);

  return FormValidator;
}();

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    var _this = this;

    _classCallCheck(this, Popup);

    _defineProperty(this, "_handleEscClose", function (evt) {
      if (evt.key === "Escape") {
        _this.close();
      }
    });

    this._popup = document.querySelector(popupSelector);
  } //функция открытия поп-апов


  _createClass(Popup, [{
    key: "open",
    value: function open() {
      document.addEventListener("keydown", this._handleEscClose);

      this._popup.classList.add("popup_active"); //функция для открытия поп-апа

    } //функция закрытия поп-апов

  }, {
    key: "close",
    value: function close() {
      document.removeEventListener("keydown", this._handleEscClose);

      this._popup.classList.remove("popup_active"); //функция для закрытия

    } //закрытие поп-апа на escup

  }, {
    key: "setEventListeners",
    value: //слушатель для закрытия поп-апа на overlay и крестик
    function setEventListeners() {
      var _this2 = this;

      this._popup.addEventListener("mousedown", function (event) {
        if (event.target === _this2._popup || event.target.classList.contains("popup__close")) {
          _this2.close();
        }
      });
    }
  }]);

  return Popup;
}();



/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(popupSelector, handleFormSubmit) {
    var _this;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._popupFormCard = _this._popup.querySelector(".form");
    _this._handleFormSubmit = handleFormSubmit;
    _this._inputList = Array.from(_this._popupFormCard.querySelectorAll(".form__item"));
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var inputValues = {};

      this._inputList.forEach(function (input) {
        inputValues[input.name] = input.value;
      }); // console.log(inputValues)


      return inputValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._popupFormCard.addEventListener("submit", function (evt) {
        evt.preventDefault();

        _this2._handleFormSubmit(_this2._getInputValues());
      }); //console.log(this._handleFormSubmit)

    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);

      this._popupFormCard.reset();
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 //поп-пап с картинкой

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(_ref) {
    var _this;

    var popupSelector = _ref.popupSelector,
        imagePhoto = _ref.imagePhoto,
        imageText = _ref.imageText;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._imagePhoto = document.querySelector(imagePhoto);
    _this._imageText = document.querySelector(imageText);
    return _this;
  } // открытие поп-апа


  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(cardname, link) {
      this._imagePhoto.src = link;
      this._imagePhoto.alt = cardname;
      this._imageText.textContent = cardname;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/PopupWithSubmit.js":
/*!*******************************************!*\
  !*** ./src/components/PopupWithSubmit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithSubmit)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithSubmit = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithSubmit, _Popup);

  var _super = _createSuper(PopupWithSubmit);

  function PopupWithSubmit(_ref) {
    var _this;

    var popupSelector = _ref.popupSelector,
        handleFormSubmit = _ref.handleFormSubmit;

    _classCallCheck(this, PopupWithSubmit);

    _this = _super.call(this, popupSelector);
    _this._handleFormSubmit = handleFormSubmit;
    _this._formConfirm = _this._popup.querySelector(".form-confirm");
    return _this;
  }

  _createClass(PopupWithSubmit, [{
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithSubmit.prototype), "setEventListeners", this).call(this);

      this._formConfirm.addEventListener("submit", function (evt) {
        evt.preventDefault();

        _this2._handleFormSubmit();
      });
    }
  }, {
    key: "confirmDeleteMyCard",
    value: function confirmDeleteMyCard(myCard) {
      this._handleFormSubmit = myCard;
    }
  }]);

  return PopupWithSubmit;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(renderer, containerSelector) {
    _classCallCheck(this, Section);

    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  } // добавленная карточка отрисовывается в начале


  _createClass(Section, [{
    key: "addItem",
    value: function addItem(cardElement) {
      this._container.prepend(cardElement);
    }
  }, {
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;

      items.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }]);

  return Section;
}();



/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var username = _ref.username,
        job = _ref.job,
        avatar = _ref.avatar;

    _classCallCheck(this, UserInfo);

    this._username = document.querySelector(username);
    this._job = document.querySelector(job);
    this._avatar = document.querySelector(avatar);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var inputUserInfo = {
        username: this._username.textContent,
        job: this._job.textContent
      };
      return inputUserInfo;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var username = _ref2.username,
          job = _ref2.job,
          avatar = _ref2.avatar;
      this._job.textContent = job, this._username.textContent = username;
      this._avatar.src = avatar;
    }
  }, {
    key: "getUserId",
    value: function getUserId() {
      return this._userId;
    }
  }, {
    key: "setUserId",
    value: function setUserId(id) {
      this._userId = id;
    }
  }]);

  return UserInfo;
}();



/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "avatarButton": () => (/* binding */ avatarButton),
/* harmony export */   "avatarPopup": () => (/* binding */ avatarPopup),
/* harmony export */   "cardOpenButton": () => (/* binding */ cardOpenButton),
/* harmony export */   "cardsPopup": () => (/* binding */ cardsPopup),
/* harmony export */   "formCard": () => (/* binding */ formCard),
/* harmony export */   "jobInput": () => (/* binding */ jobInput),
/* harmony export */   "nameInput": () => (/* binding */ nameInput),
/* harmony export */   "profileForm": () => (/* binding */ profileForm),
/* harmony export */   "profileOpenButton": () => (/* binding */ profileOpenButton),
/* harmony export */   "renderLoading": () => (/* binding */ renderLoading)
/* harmony export */ });

var profileOpenButton = document.querySelector(".popup-open"); //кнопка открытия поп-апа

var profileForm = document.querySelector(".form-profile"); // Находим поля формы в DOM

var nameInput = document.querySelector(".form__item_type_username"); // Воспользуйтесь инструментом .querySelector()

var jobInput = document.querySelector(".form__item_type_job"); // Воспользуйтесь инструментом .querySelector()

var cardsPopup = document.querySelector(".popup-cards"); //поп-пап формы с картинками

var cardOpenButton = document.querySelector(".add-open"); //кнопка открытия формы поп-апа с картинками
//const cardsContainer = document.querySelector(".cards__elements"); // список контейнер

var formCard = cardsPopup.querySelector(".form-card"); //для создания карточки картинки

var avatarButton = document.querySelector(".profile__edit-photo");
var avatarPopup = document.querySelector(".popup-avatar");

var renderLoading = function renderLoading(popup) {
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var currentActiveButton = document.querySelector(".".concat(popup, " .popup__save"));

  if (isLoading) {
    currentActiveButton.textContent = "Загрузка...";
  } else {
    currentActiveButton.textContent = "Сохранить";
  }
};

var initialCards = [{
  name: "Архыз",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
}, {
  name: "Челябинская область",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
}, {
  name: "Иваново",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
}, {
  name: "Камчатка",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
}, {
  name: "Холмогорский район",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
}, {
  name: "Байкал",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
}];

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _components_PopupWithSubmit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PopupWithSubmit.js */ "./src/components/PopupWithSubmit.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var obj = {
  formSelector: ".form",
  inputSelector: ".form__item",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "form__item-error_active",
  errorClass: "form__item_type_error"
};
var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-41/",
  headers: {
    authorization: "cce2dc6d-fce0-4adb-80f6-8b8fce306754",
    "content-type": "application/json"
  }
}); //валидация форм

var validityForm = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.FormValidator(obj, _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.profileForm);
var validityCard = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.FormValidator(obj, _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.formCard);
var validityAvatar = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.FormValidator(obj, _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.avatarPopup); //поп-пап с картинкой, присвоение значений (это не волшебство)

var popupWithOpenImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
  popupSelector: ".popup-image",
  imagePhoto: ".popup__photo",
  imageText: ".popup__text"
}); // функция для открытия поп-папа картинки

var handleCardClick = function handleCardClick(name, link) {
  popupWithOpenImage.open(name, link);
}; //попап согласия при удалении картинки


var popupConfirm = new _components_PopupWithSubmit_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
  popupSelector: ".confirm-popup"
}); //создание карточки и темплейта и функция открытия картинки

var createCard = function createCard(item) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    data: item,
    handleCardClick: handleCardClick,
    handleBinClick: function handleBinClick() {
      popupConfirm.open();
      popupConfirm.confirmDeleteMyCard(function () {
        api.deleteNewCard(card.getId()).then(function () {
          card.handleDeleteBinClick();
          popupConfirm.close();
        }).catch(function (err) {
          console.log(err);
        });
      });
    },
    handleLikeClick: function handleLikeClick() {
      var id = card.getId();
      var action = card.isLiked() ? api.deleteLike(id) : api.putLikeCard(id);
      action.then(function (data) {
        card.toggleLikesState(data);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, ".card-template", userInfo.getUserId());
  return card.generateCard();
};

var cardsList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_2__["default"](renderCard, ".cards__elements");
var initialcards = api.getInitialCards().then(function (result) {
  // обрабатываем результат
  var cardsInit = result.map(function (item) {
    return {
      name: item.name,
      link: item.link,
      id: item._id,
      ownerId: item.owner._id,
      likes: item.likes,
      likeCounter: item.likes.length
    };
  });
  return cardsInit;
}).catch(function (err) {
  console.log(err); // выведем ошибку в консоль
}); // поп-пап с картинкой

var popupWithCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"](".popup-cards", handleCardAddSubmit); // поп-пап профиль

var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  username: ".profile__name",
  job: ".profile__job",
  avatar: ".profile__avatar"
}); //получение данных для профиля

var getUserInfoApi = api.getUserInfoFromApi();
var popupWithProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"](".popup-form", handleFormSubmitUser); // поппап изменения аватара.

var popupAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"](".popup-avatar", handleFormSubmitAvatar); // массив с карточками вставляем в проект

function renderCard(item) {
  var cardElement = createCard(item);
  cardsList.addItem(cardElement);
}

function handleCardAddSubmit(_ref) {
  var link = _ref.link,
      name = _ref.name;
  (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.renderLoading)("popup-cards", true);
  api.addNewCard({
    name: name,
    link: link
  }).then(function (data) {
    cardsList.addItem(createCard({
      link: data.link,
      name: data.name,
      id: data._id,
      ownerId: data.owner._id,
      likeCounter: data.likes.length,
      likes: data.likes
    }));
    popupWithCard.close();
  }).catch(function (err) {
    console.log(err);
  }).finally(function () {
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.renderLoading)("popup-cards", false);
  });
}

function handleFormSubmitAvatar(_ref2) {
  var avatar = _ref2.avatar;
  (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.renderLoading)("popup-avatar", true);
  api.addUserAvatar({
    avatar: avatar
  }).then(function (data) {
    userInfo.setUserInfo({
      username: data.name,
      job: data.about,
      avatar: data.avatar
    });
    popupAvatar.close();
  }).catch(function (err) {
    console.log(err);
  }).finally(function () {
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.renderLoading)("popup-avatar", false);
  });
}

function handleFormSubmitUser(_ref3) {
  var username = _ref3.username,
      job = _ref3.job;
  (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.renderLoading)("popup-form", true);
  api.addUserInfo({
    name: username,
    about: job
  }).then(function (data) {
    userInfo.setUserInfo({
      username: data.name,
      job: data.about,
      avatar: data.avatar
    });
    popupWithProfile.close();
  }).catch(function (err) {
    console.log(err);
  }).finally(function () {
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.renderLoading)("popup-form", false);
  });
} // промис для получения данных картинки и пользователя


Promise.all([initialcards, getUserInfoApi]).then(function (_ref4) {
  var _ref5 = _slicedToArray(_ref4, 2),
      cardsInit = _ref5[0],
      getUserInfoApi = _ref5[1];

  userInfo.setUserId(getUserInfoApi._id);
  cardsList.renderItems(cardsInit);
  userInfo.setUserInfo({
    username: getUserInfoApi.name,
    job: getUserInfoApi.about,
    avatar: getUserInfoApi.avatar
  });
}).catch(function (err) {
  console.log(err);
}); // слушатели
// открытие поп-апа добовления картинки

_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.cardOpenButton.addEventListener("click", function () {
  validityCard.disableSubmitButton();
  popupWithCard.open();
}); //Сохранение данных для поп-апа формы профиль

_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.profileOpenButton.addEventListener("click", function () {
  validityForm.disableSubmitButton();

  var _userInfo$getUserInfo = userInfo.getUserInfo(),
      username = _userInfo$getUserInfo.username,
      job = _userInfo$getUserInfo.job;

  _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.nameInput.value = username; //записываем данные в инпут из профайла

  _utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.jobInput.value = job;
  popupWithProfile.open();
}); //открытие попапа с аватаром

_utils_utils_js__WEBPACK_IMPORTED_MODULE_9__.avatarButton.addEventListener("click", function () {
  validityAvatar.disableSubmitButton();
  popupAvatar.open();
}); // 

validityForm.enableValidation();
validityCard.enableValidation();
validityAvatar.enableValidation();
popupWithOpenImage.setEventListeners();
popupConfirm.setEventListeners();
popupWithProfile.setEventListeners();
popupWithCard.setEventListeners();
popupAvatar.setEventListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBaEIsZ0JBQWdCLENBQUNnQixpQkFBakI7QUFDQXBCLGFBQWEsQ0FBQ29CLGlCQUFkO0FBQ0FkLFdBQVcsQ0FBQ2MsaUJBQVosRyIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aFN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgdGhpcy5fYmFzZVVybCA9IGNvbmZpZy5iYXNlVXJsO1xyXG4gICAgdGhpcy5faGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVByb21pc2VFcnIocmVzKSB7XHJcbiAgICByZXR1cm4gcmVzLm9rID8gcmVzLmpzb24oKSA6IFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzLnN0YXR1c31gKTtcclxuICB9XHJcblxyXG4gIC8vINC/0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgZ2V0VXNlckluZm9Gcm9tQXBpKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lYCwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICB9KS50aGVuKHRoaXMuX2hhbmRsZVByb21pc2VFcnIpO1xyXG4gIH1cclxuICAvLyDQv9C+0LvRg9GH0LXQvdC40LUg0LrQsNGA0YLQuNC90L7QulxyXG4gIGdldEluaXRpYWxDYXJkcygpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkc2AsIHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgfSkudGhlbih0aGlzLl9oYW5kbGVQcm9taXNlRXJyKTtcclxuICB9XHJcblxyXG4gIC8v0LTQvtCx0LDQstC40YLRjCDQvdC+0LLQvtCz0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgYWRkVXNlckluZm8oZGF0YSkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9KS50aGVuKHRoaXMuX2hhbmRsZVByb21pc2VFcnIpO1xyXG4gIH1cclxuXHJcbiAgLy/QlNC+0LHQsNCy0LjRgtGMINC90L7QstGD0Y4g0LrQsNGA0YLQuNC90LrRgy5cclxuICBhZGROZXdDYXJkKGRhdGEpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkc2AsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9KS50aGVuKHRoaXMuX2hhbmRsZVByb21pc2VFcnIpO1xyXG4gIH1cclxuXHJcbiAgLy/QtNC+0LHQsNCy0LjRgtGMINC90L7QstC+0LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICBhZGRVc2VyQXZhdGFyKGF2YXRhcikge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lL2F2YXRhcmAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGF2YXRhciksXHJcbiAgICB9KS50aGVuKHRoaXMuX2hhbmRsZVByb21pc2VFcnIpO1xyXG4gIH1cclxuXHJcbiAgLy/Qo9C00LDQu9C40YLRjCDQvdC+0LLRg9GOINC60LDRgNGC0LjQvdC60YMuXHJcbiAgZGVsZXRlTmV3Q2FyZChpZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzLyR7aWR9YCwge1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICB9KS50aGVuKHRoaXMuX2hhbmRsZVByb21pc2VFcnIpO1xyXG4gIH1cclxuXHJcbiAgLy/QlNC+0LHQsNCy0LjRgtGMIGxpa2Ug0LrQsNGA0YLQuNC90LrQtS5cclxuICBwdXRMaWtlQ2FyZChpZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzLyR7aWR9L2xpa2VzYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICB9KS50aGVuKHRoaXMuX2hhbmRsZVByb21pc2VFcnIpO1xyXG4gIH1cclxuXHJcbiAgLy/Qo9C00LDQu9C40YLRjCBsaWtlINC60LDRgNGC0LjQvdC60LguXHJcbiAgZGVsZXRlTGlrZShpZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzLyR7aWR9L2xpa2VzYCwge1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICB9KS50aGVuKHRoaXMuX2hhbmRsZVByb21pc2VFcnIpO1xyXG4gIH1cclxufVxyXG4iLCIvLyDQutC70LDRgdGBINGB0L7Qt9C00LDQvdC40Y8g0LrQsNGA0YLQvtGH0LrQuFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcclxuICAvL9C00LDQvdC90YvQtSDQutCw0YDRgtC+0YfQutC4INC4IHRlbXBsYXRlXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB7IGRhdGEsIGhhbmRsZUNhcmRDbGljaywgaGFuZGxlQmluQ2xpY2ssIGhhbmRsZUxpa2VDbGljayB9LFxyXG4gICAgY2FyZFNlbGVjdG9yLFxyXG4gICAgdXNlcklkXHJcbiAgKSB7XHJcbiAgICB0aGlzLl90ZXh0ID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5faW1hZ2UgPSBkYXRhLmxpbms7XHJcbiAgICB0aGlzLl9pZCA9IGRhdGEuaWQ7XHJcbiAgICB0aGlzLl9saWtlcyA9IGRhdGEubGlrZXM7XHJcbiAgICB0aGlzLl9vd25lcklkID0gZGF0YS5vd25lcklkO1xyXG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gICAgdGhpcy5fdXNlcklkID0gdXNlcklkO1xyXG4gICAgdGhpcy5faGFuZGxlQmluQ2xpY2sgPSBoYW5kbGVCaW5DbGljaztcclxuICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayA9IGhhbmRsZUxpa2VDbGljaztcclxuICAgIHRoaXMuX2xpa2VzVXNlciA9IHRoaXMuX2xpa2VzLnNvbWUoKGl0ZW0pID0+IGl0ZW0uX2lkID09PSB0aGlzLl91c2VySWQpO1xyXG4gICAgdGhpcy5fbGlrZUNvdW50ZXIgPSBkYXRhLmxpa2VDb3VudGVyO1xyXG4gIH1cclxuXHJcbiAgX2dldFRlbXBsYXRlKCkge1xyXG4gICAgY29uc3QgcGhvdG9DYXJkID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvXCIpXHJcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIHBob3RvQ2FyZDtcclxuICB9XHJcblxyXG4gIGdldElkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gIH1cclxuXHJcbiAgaXNMaWtlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9saWtlc1VzZXI7XHJcbiAgfVxyXG5cclxuICAvL9C/0YDQuNGB0LLQsNC10LLQsNC10Lwg0LrQu9Cw0YHRgdGLINC30L3QsNGH0LXQvdC40Y/QvCDQutCw0YDRgtC+0YfQtdC6XHJcbiAgZ2VuZXJhdGVDYXJkKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcbiAgICAvLyDQlNC+0LHQvtCy0LvRj9C10Lwg0LTQsNC90L3Ri9C1XHJcbiAgICB0aGlzLl9waG90b0ltYWdlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvX19pbWFnZVwiKTtcclxuXHJcbiAgICB0aGlzLl9waG90b0ltYWdlLnNyYyA9IHRoaXMuX2ltYWdlO1xyXG4gICAgdGhpcy5fcGhvdG9JbWFnZS5hbHQgPSB0aGlzLl90ZXh0O1xyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvX190ZXh0XCIpLnRleHRDb250ZW50ID0gdGhpcy5fdGV4dDtcclxuICAgIC8vIGJpblxyXG4gICAgdGhpcy5fYmluRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90b19fYmluXCIpO1xyXG4gICAgaWYgKHRoaXMuX293bmVySWQgPT09IHRoaXMuX3VzZXJJZCkge1xyXG4gICAgICB0aGlzLl9iaW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwaG90b19fYmluX2FjdGl2ZVwiKTtcclxuICAgIH1cclxuICAgIC8vIGxpa2VcclxuICAgIHRoaXMuX2VsZW1lbnRMaWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvX192ZWN0b3JcIik7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuX2xpa2VzLnNvbWUoKGl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gaXRlbS5faWQgPT09IHRoaXMuX3VzZXJJZDtcclxuICAgICAgfSlcclxuICAgICkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50TGlrZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGhvdG9fX3ZlY3Rvcl9hY3RpdmVcIik7XHJcbiAgICB9IFxyXG4gICAgdGhpcy5fZWxlbWVudExpa2VDb3VudGVyID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvX19udW1saWtlXCIpO1xyXG4gICAgdGhpcy5fZWxlbWVudExpa2VDb3VudGVyLnRleHRDb250ZW50ID0gdGhpcy5fbGlrZUNvdW50ZXI7XHJcblxyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLy8gbGlrZSDQtNC+0LHQsNCy0LvQtdC90LjQtSDQuNC70Lgg0YPQtNCw0LvQtdC90LjQtVxyXG4gIHRvZ2dsZUxpa2VzU3RhdGUoZGF0YSkge1xyXG4gICAgdGhpcy5fZWxlbWVudExpa2VDb3VudGVyLnRleHRDb250ZW50ID0gZGF0YS5saWtlcy5sZW5ndGg7XHJcbiAgICB0aGlzLl9saWtlc1VzZXIgPSAhdGhpcy5fbGlrZXNVc2VyO1xyXG5cclxuICAgIGlmICh0aGlzLmlzTGlrZWQoKSkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50TGlrZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGhvdG9fX3ZlY3Rvcl9hY3RpdmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9lbGVtZW50TGlrZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwicGhvdG9fX3ZlY3Rvcl9hY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL2JpblxyXG4gIGhhbmRsZURlbGV0ZUJpbkNsaWNrKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgLy8gbGlrZVxyXG4gICAgdGhpcy5fZWxlbWVudExpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlTGlrZUNsaWNrKGV2dCk7XHJcbiAgICB9KTtcclxuICAgIC8vIGJpblxyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvX19iaW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlQmluQ2xpY2soKTtcclxuICAgIH0pO1xyXG4gICAgLy8g0L7RgtC60YDRi9GC0LjQtSDQutCw0YDRgtC40L3QutC4XHJcbiAgICB0aGlzLl9waG90b0ltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl90ZXh0LCB0aGlzLl9pbWFnZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKGRhdGEsIGZvcm1MaXN0KSB7XHJcbiAgICB0aGlzLl9mb3JtU2VsZWN0b3IgPSBkYXRhLmZvcm1TZWxlY3RvcjtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBkYXRhLmlucHV0U2VsZWN0b3I7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IGRhdGEuc3VibWl0QnV0dG9uU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gZGF0YS5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gZGF0YS5pbnB1dEVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gZGF0YS5lcnJvckNsYXNzO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLl9pbnB1dFNlbGVjdG9yKVxyXG4gICAgdGhpcy5fZm9ybUxpc3QgPSBmb3JtTGlzdDtcclxuICAgIC8vY29uc29sZS5sb2cgKGZvcm1MaXN0KVxyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1MaXN0LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy/Qv9C+0LrQsNC30YvQstCw0LXRgiDRjdC70LXQvNC10L3RgiDQvtGI0LjQsdC60LhcclxuICBfc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtTGlzdC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcclxuICAgICk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlcnJvckVsZW1lbnQpXHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICAvLyDRgdC60YDRi9Cy0LDQtdGCINGN0LvQtdC80LXQvdGCINC+0YjQuNCx0LrQuFxyXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1MaXN0LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxyXG4gICAgKTtcclxuICAgIC8vY29uc29sZS5sb2coZXJyb3JFbGVtZW50KTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICAvLyDQv9GA0L7QstC10YDQutCwINC40L3Qv9GD0YLQvtCyINC00LvRjyDQutC90L7Qv9C60LhcclxuICBfaGFzSW52YWxpZElucHV0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vINGE0YPQvdC60YbQuNGPINCx0LvQvtC60LjRgNC+0LLQutC4INC60L3QvtC/0LrQuFxyXG4gIGRpc2FibGVTdWJtaXRCdXR0b24oKSB7XHJcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcblxyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2J1dHRvbkVsZW1lbnQpXHJcbiAgfVxyXG5cclxuICBfZW5hYmxlU3VibWl0QnV0dG9uKCkge1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8g0YTRg9C90LrRhtC40Y8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNGPINC60L3QvtC/0LrQuFxyXG5cclxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XHJcbiAgICAvLyDQldGB0LvQuCDQtdGB0YLRjCDRhdC+0YLRjyDQsdGLINC+0LTQuNC9INC90LXQstCw0LvQuNC00L3Ri9C5INC40L3Qv9GD0YJcclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoKSkge1xyXG4gICAgICAvLyDRgdC00LXQu9Cw0Lkg0LrQvdC+0L/QutGDINC90LXQsNC60YLQuNCy0L3QvtC5XHJcbiAgICAgIHRoaXMuZGlzYWJsZVN1Ym1pdEJ1dHRvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g0LjQvdCw0YfQtSDRgdC00LXQu9Cw0Lkg0LrQvdC+0L/QutGDINCw0LrRgtC40LLQvdC+0LlcclxuICAgICAgdGhpcy5fZW5hYmxlU3VibWl0QnV0dG9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDQv9GA0L7QstC10YDQutCwINC90LAg0LLQsNC70LjQtNC90L7RgdGC0Ywg0L/QvtC70LXQuVxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XHJcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZSlcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDRhNGD0L3QutGG0LjRjyDQv9C10YDQtdCx0L7RgNCwINCy0YHQtdGFIGlucHV0cyDRhNC+0YDQvFxyXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKFxyXG4gICAgICB0aGlzLl9mb3JtTGlzdC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXHJcbiAgICApO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLl9pbnB1dExpc3QpXHJcblxyXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIC8v0YTRg9C90LrRhtC40Y8g0L7RgtC60YDRi9GC0LjRjyDQv9C+0L8t0LDQv9C+0LJcclxuICBvcGVuKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX2FjdGl2ZVwiKTsgLy/RhNGD0L3QutGG0LjRjyDQtNC70Y8g0L7RgtC60YDRi9GC0LjRjyDQv9C+0L8t0LDQv9CwXHJcbiAgfVxyXG4gIC8v0YTRg9C90LrRhtC40Y8g0LfQsNC60YDRi9GC0LjRjyDQv9C+0L8t0LDQv9C+0LJcclxuICBjbG9zZSgpIHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9hY3RpdmVcIik7IC8v0YTRg9C90LrRhtC40Y8g0LTQu9GPINC30LDQutGA0YvRgtC40Y9cclxuICB9XHJcblxyXG4gIC8v0LfQsNC60YDRi9GC0LjQtSDQv9C+0L8t0LDQv9CwINC90LAgZXNjdXBcclxuICBfaGFuZGxlRXNjQ2xvc2UgPSAoZXZ0KSA9PiB7XHJcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy/RgdC70YPRiNCw0YLQtdC70Ywg0LTQu9GPINC30LDQutGA0YvRgtC40Y8g0L/QvtC/LdCw0L/QsCDQvdCwIG92ZXJsYXkg0Lgg0LrRgNC10YHRgtC40LpcclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0ID09PSB0aGlzLl9wb3B1cCB8fFxyXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cF9fY2xvc2VcIilcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQpIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fcG9wdXBGb3JtQ2FyZCA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcclxuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcclxuICAgICAgdGhpcy5fcG9wdXBGb3JtQ2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2l0ZW1cIilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGlucHV0VmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGlucHV0VmFsdWVzKVxyXG4gICAgcmV0dXJuIGlucHV0VmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fcG9wdXBGb3JtQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICB9KTtcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5faGFuZGxlRm9ybVN1Ym1pdClcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIHRoaXMuX3BvcHVwRm9ybUNhcmQucmVzZXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcbi8v0L/QvtC/LdC/0LDQvyDRgSDQutCw0YDRgtC40L3QutC+0LlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yLCBpbWFnZVBob3RvLCBpbWFnZVRleHQgfSkge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9pbWFnZVBob3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbWFnZVBob3RvKTtcclxuICAgIHRoaXMuX2ltYWdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW1hZ2VUZXh0KTtcclxuICB9XHJcbiAgLy8g0L7RgtC60YDRi9GC0LjQtSDQv9C+0L8t0LDQv9CwXHJcbiAgb3BlbihjYXJkbmFtZSwgbGluaykge1xyXG4gICAgdGhpcy5faW1hZ2VQaG90by5zcmMgPSBsaW5rO1xyXG4gICAgdGhpcy5faW1hZ2VQaG90by5hbHQgPSBjYXJkbmFtZTtcclxuICAgIHRoaXMuX2ltYWdlVGV4dC50ZXh0Q29udGVudCA9IGNhcmRuYW1lO1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aFN1Ym1pdCBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQgfSkge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcclxuICAgIHRoaXMuX2Zvcm1Db25maXJtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbmZpcm1cIik7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9mb3JtQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uZmlybURlbGV0ZU15Q2FyZChteUNhcmQpIHtcclxuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBteUNhcmQ7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyLCBjb250YWluZXJTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgLy8g0LTQvtCx0LDQstC70LXQvdC90LDRjyDQutCw0YDRgtC+0YfQutCwINC+0YLRgNC40YHQvtCy0YvQstCw0LXRgtGB0Y8g0LIg0L3QsNGH0LDQu9C1XHJcbiAgYWRkSXRlbShjYXJkRWxlbWVudCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoY2FyZEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbXMoaXRlbXMpIHtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHsgdXNlcm5hbWUsIGpvYiwgYXZhdGFyIH0pIHtcclxuICAgIHRoaXMuX3VzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VybmFtZSk7XHJcbiAgICB0aGlzLl9qb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpvYik7XHJcbiAgICB0aGlzLl9hdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGF2YXRhcik7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIGNvbnN0IGlucHV0VXNlckluZm8gPSB7XHJcbiAgICAgIHVzZXJuYW1lOiB0aGlzLl91c2VybmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgam9iOiB0aGlzLl9qb2IudGV4dENvbnRlbnQsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGlucHV0VXNlckluZm87XHJcbiAgfVxyXG5cclxuICBzZXRVc2VySW5mbyh7IHVzZXJuYW1lLCBqb2IsIGF2YXRhciB9KSB7XHJcbiAgICAodGhpcy5fam9iLnRleHRDb250ZW50ID0gam9iKSwgKHRoaXMuX3VzZXJuYW1lLnRleHRDb250ZW50ID0gdXNlcm5hbWUpO1xyXG4gICAgdGhpcy5fYXZhdGFyLnNyYyA9IGF2YXRhcjtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl91c2VySWQ7XHJcbiAgfVxyXG5cclxuICBzZXRVc2VySWQoaWQpIHtcclxuICAgIHRoaXMuX3VzZXJJZCA9IGlkO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQge1xyXG4gIHByb2ZpbGVPcGVuQnV0dG9uLFxyXG4gIHByb2ZpbGVGb3JtLFxyXG4gIG5hbWVJbnB1dCxcclxuICBqb2JJbnB1dCxcclxuICBjYXJkc1BvcHVwLFxyXG4gIGNhcmRPcGVuQnV0dG9uLFxyXG4gIGZvcm1DYXJkLFxyXG4gIGF2YXRhckJ1dHRvbixcclxuICBhdmF0YXJQb3B1cCxcclxuICByZW5kZXJMb2FkaW5nLFxyXG59O1xyXG5cclxuY29uc3QgcHJvZmlsZU9wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLW9wZW5cIik7IC8v0LrQvdC+0L/QutCwINC+0YLQutGA0YvRgtC40Y8g0L/QvtC/LdCw0L/QsFxyXG5jb25zdCBwcm9maWxlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1wcm9maWxlXCIpO1xyXG4vLyDQndCw0YXQvtC00LjQvCDQv9C+0LvRjyDRhNC+0YDQvNGLINCyIERPTVxyXG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2l0ZW1fdHlwZV91c2VybmFtZVwiKTsgLy8g0JLQvtGB0L/QvtC70YzQt9GD0LnRgtC10YHRjCDQuNC90YHRgtGA0YPQvNC10L3RgtC+0LwgLnF1ZXJ5U2VsZWN0b3IoKVxyXG5jb25zdCBqb2JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9faXRlbV90eXBlX2pvYlwiKTsgLy8g0JLQvtGB0L/QvtC70YzQt9GD0LnRgtC10YHRjCDQuNC90YHRgtGA0YPQvNC10L3RgtC+0LwgLnF1ZXJ5U2VsZWN0b3IoKVxyXG5cclxuY29uc3QgY2FyZHNQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtY2FyZHNcIik7IC8v0L/QvtC/LdC/0LDQvyDRhNC+0YDQvNGLINGBINC60LDRgNGC0LjQvdC60LDQvNC4XHJcbmNvbnN0IGNhcmRPcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtb3BlblwiKTsgLy/QutC90L7Qv9C60LAg0L7RgtC60YDRi9GC0LjRjyDRhNC+0YDQvNGLINC/0L7Qvy3QsNC/0LAg0YEg0LrQsNGA0YLQuNC90LrQsNC80LhcclxuXHJcbi8vY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19lbGVtZW50c1wiKTsgLy8g0YHQv9C40YHQvtC6INC60L7QvdGC0LXQudC90LXRgFxyXG5jb25zdCBmb3JtQ2FyZCA9IGNhcmRzUG9wdXAucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNhcmRcIik7IC8v0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0LrQsNGA0YLQvtGH0LrQuCDQutCw0YDRgtC40L3QutC4XHJcbmNvbnN0IGF2YXRhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1waG90b1wiKTtcclxuY29uc3QgYXZhdGFyUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLWF2YXRhclwiKTtcclxuXHJcbmNvbnN0IHJlbmRlckxvYWRpbmcgPSAocG9wdXAsIGlzTG9hZGluZyA9IGZhbHNlKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudEFjdGl2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BvcHVwfSAucG9wdXBfX3NhdmVgKTtcclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICBjdXJyZW50QWN0aXZlQnV0dG9uLnRleHRDb250ZW50ID0gXCLQl9Cw0LPRgNGD0LfQutCwLi4uXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGN1cnJlbnRBY3RpdmVCdXR0b24udGV4dENvbnRlbnQgPSBcItCh0L7RhdGA0LDQvdC40YLRjFwiO1xyXG4gIH1cclxufTtcclxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwi0JDRgNGF0YvQt1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYXJraHl6LmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCLQp9C10LvRj9Cx0LjQvdGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9jaGVseWFiaW5zay1vYmxhc3QuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcItCY0LLQsNC90L7QstC+XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9pdmFub3ZvLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCLQmtCw0LzRh9Cw0YLQutCwXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9rYW1jaGF0a2EuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcItCl0L7Qu9C80L7Qs9C+0YDRgdC60LjQuSDRgNCw0LnQvtC9XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9raG9sbW9nb3Jza3ktcmF5b24uanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcItCR0LDQudC60LDQu1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYmFpa2FsLmpwZ1wiLFxyXG4gIH0sXHJcbl07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgeyBGb3JtVmFsaWRhdG9yIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xyXG5pbXBvcnQgXCIuLi9wYWdlcy9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEFwaSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcGkuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aFN1Ym1pdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhTdWJtaXQuanNcIjtcclxuaW1wb3J0IHtcclxuICBwcm9maWxlT3BlbkJ1dHRvbixcclxuICBwcm9maWxlRm9ybSxcclxuICBuYW1lSW5wdXQsXHJcbiAgam9iSW5wdXQsXHJcbiAgY2FyZHNQb3B1cCxcclxuICBjYXJkT3BlbkJ1dHRvbixcclxuICBmb3JtQ2FyZCxcclxuICBhdmF0YXJCdXR0b24sXHJcbiAgYXZhdGFyUG9wdXAsXHJcbiAgcmVuZGVyTG9hZGluZyxcclxufSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcclxuXHJcbmNvbnN0IG9iaiA9IHtcclxuICBmb3JtU2VsZWN0b3I6IFwiLmZvcm1cIixcclxuICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtX19pdGVtXCIsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLnBvcHVwX19zYXZlXCIsXHJcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJwb3B1cF9fc2F2ZV9kaXNhYmxlZFwiLFxyXG4gIGlucHV0RXJyb3JDbGFzczogXCJmb3JtX19pdGVtLWVycm9yX2FjdGl2ZVwiLFxyXG4gIGVycm9yQ2xhc3M6IFwiZm9ybV9faXRlbV90eXBlX2Vycm9yXCIsXHJcbn07XHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcclxuICBiYXNlVXJsOiBcImh0dHBzOi8vbWVzdG8ubm9tb3JlcGFydGllcy5jby92MS9jb2hvcnQtNDEvXCIsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgYXV0aG9yaXphdGlvbjogXCJjY2UyZGM2ZC1mY2UwLTRhZGItODBmNi04YjhmY2UzMDY3NTRcIixcclxuICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy/QstCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0LxcclxuY29uc3QgdmFsaWRpdHlGb3JtID0gbmV3IEZvcm1WYWxpZGF0b3Iob2JqLCBwcm9maWxlRm9ybSk7XHJcbmNvbnN0IHZhbGlkaXR5Q2FyZCA9IG5ldyBGb3JtVmFsaWRhdG9yKG9iaiwgZm9ybUNhcmQpO1xyXG5jb25zdCB2YWxpZGl0eUF2YXRhciA9IG5ldyBGb3JtVmFsaWRhdG9yKG9iaiwgYXZhdGFyUG9wdXApO1xyXG5cclxuLy/Qv9C+0L8t0L/QsNC/INGBINC60LDRgNGC0LjQvdC60L7QuSwg0L/RgNC40YHQstC+0LXQvdC40LUg0LfQvdCw0YfQtdC90LjQuSAo0Y3RgtC+INC90LUg0LLQvtC70YjQtdCx0YHRgtCy0L4pXHJcbmNvbnN0IHBvcHVwV2l0aE9wZW5JbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogXCIucG9wdXAtaW1hZ2VcIixcclxuICBpbWFnZVBob3RvOiBcIi5wb3B1cF9fcGhvdG9cIixcclxuICBpbWFnZVRleHQ6IFwiLnBvcHVwX190ZXh0XCIsXHJcbn0pO1xyXG4vLyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0L7RgtC60YDRi9GC0LjRjyDQv9C+0L8t0L/QsNC/0LAg0LrQsNGA0YLQuNC90LrQuFxyXG5jb25zdCBoYW5kbGVDYXJkQ2xpY2sgPSAobmFtZSwgbGluaykgPT4ge1xyXG4gIHBvcHVwV2l0aE9wZW5JbWFnZS5vcGVuKG5hbWUsIGxpbmspO1xyXG59O1xyXG5cclxuLy/Qv9C+0L/QsNC/INGB0L7Qs9C70LDRgdC40Y8g0L/RgNC4INGD0LTQsNC70LXQvdC40Lgg0LrQsNGA0YLQuNC90LrQuFxyXG5jb25zdCBwb3B1cENvbmZpcm0gPSBuZXcgUG9wdXBXaXRoU3VibWl0KHsgcG9wdXBTZWxlY3RvcjogXCIuY29uZmlybS1wb3B1cFwiIH0pO1xyXG5cclxuLy/RgdC+0LfQtNCw0L3QuNC1INC60LDRgNGC0L7Rh9C60Lgg0Lgg0YLQtdC80L/Qu9C10LnRgtCwINC4INGE0YPQvdC60YbQuNGPINC+0YLQutGA0YvRgtC40Y8g0LrQsNGA0YLQuNC90LrQuFxyXG5jb25zdCBjcmVhdGVDYXJkID0gKGl0ZW0pID0+IHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoXHJcbiAgICB7XHJcbiAgICAgIGRhdGE6IGl0ZW0sXHJcbiAgICAgIGhhbmRsZUNhcmRDbGljayxcclxuICAgICAgaGFuZGxlQmluQ2xpY2s6ICgpID0+IHtcclxuICAgICAgICBwb3B1cENvbmZpcm0ub3BlbigpO1xyXG4gICAgICAgIHBvcHVwQ29uZmlybS5jb25maXJtRGVsZXRlTXlDYXJkKCgpID0+IHtcclxuICAgICAgICAgIGFwaVxyXG4gICAgICAgICAgICAuZGVsZXRlTmV3Q2FyZChjYXJkLmdldElkKCkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBjYXJkLmhhbmRsZURlbGV0ZUJpbkNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgcG9wdXBDb25maXJtLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGhhbmRsZUxpa2VDbGljazogKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gY2FyZC5nZXRJZCgpO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGNhcmQuaXNMaWtlZCgpXHJcbiAgICAgICAgICA/IGFwaS5kZWxldGVMaWtlKGlkKVxyXG4gICAgICAgICAgOiBhcGkucHV0TGlrZUNhcmQoaWQpO1xyXG4gICAgICAgIGFjdGlvblxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY2FyZC50b2dnbGVMaWtlc1N0YXRlKGRhdGEpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIi5jYXJkLXRlbXBsYXRlXCIsXHJcbiAgICB1c2VySW5mby5nZXRVc2VySWQoKVxyXG4gICk7XHJcbiAgcmV0dXJuIGNhcmQuZ2VuZXJhdGVDYXJkKCk7XHJcbn07XHJcblxyXG5jb25zdCBjYXJkc0xpc3QgPSBuZXcgU2VjdGlvbihyZW5kZXJDYXJkLCBcIi5jYXJkc19fZWxlbWVudHNcIik7XHJcblxyXG5jb25zdCBpbml0aWFsY2FyZHMgPSBhcGlcclxuICAuZ2V0SW5pdGlhbENhcmRzKClcclxuICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAvLyDQvtCx0YDQsNCx0LDRgtGL0LLQsNC10Lwg0YDQtdC30YPQu9GM0YLQsNGCXHJcbiAgICBjb25zdCBjYXJkc0luaXQgPSByZXN1bHQubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICBuYW1lOiBpdGVtLm5hbWUsXHJcbiAgICAgIGxpbms6IGl0ZW0ubGluayxcclxuICAgICAgaWQ6IGl0ZW0uX2lkLFxyXG4gICAgICBvd25lcklkOiBpdGVtLm93bmVyLl9pZCxcclxuICAgICAgbGlrZXM6IGl0ZW0ubGlrZXMsXHJcbiAgICAgIGxpa2VDb3VudGVyOiBpdGVtLmxpa2VzLmxlbmd0aCxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4gY2FyZHNJbml0O1xyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7IC8vINCy0YvQstC10LTQtdC8INC+0YjQuNCx0LrRgyDQsiDQutC+0L3RgdC+0LvRjFxyXG4gIH0pO1xyXG5cclxuLy8g0L/QvtC/LdC/0LDQvyDRgSDQutCw0YDRgtC40L3QutC+0LlcclxuY29uc3QgcG9wdXBXaXRoQ2FyZCA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiLnBvcHVwLWNhcmRzXCIsIGhhbmRsZUNhcmRBZGRTdWJtaXQpO1xyXG5cclxuLy8g0L/QvtC/LdC/0LDQvyDQv9GA0L7RhNC40LvRjFxyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XHJcbiAgdXNlcm5hbWU6IFwiLnByb2ZpbGVfX25hbWVcIixcclxuICBqb2I6IFwiLnByb2ZpbGVfX2pvYlwiLFxyXG4gIGF2YXRhcjogXCIucHJvZmlsZV9fYXZhdGFyXCIsXHJcbn0pO1xyXG5cclxuLy/Qv9C+0LvRg9GH0LXQvdC40LUg0LTQsNC90L3Ri9GFINC00LvRjyDQv9GA0L7RhNC40LvRj1xyXG5jb25zdCBnZXRVc2VySW5mb0FwaSA9IGFwaS5nZXRVc2VySW5mb0Zyb21BcGkoKTtcclxuXHJcbmNvbnN0IHBvcHVwV2l0aFByb2ZpbGUgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5wb3B1cC1mb3JtXCIsIGhhbmRsZUZvcm1TdWJtaXRVc2VyKTtcclxuXHJcbi8vINC/0L7Qv9C/0LDQvyDQuNC30LzQtdC90LXQvdC40Y8g0LDQstCw0YLQsNGA0LAuXHJcbmNvbnN0IHBvcHVwQXZhdGFyID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXAtYXZhdGFyXCIsIGhhbmRsZUZvcm1TdWJtaXRBdmF0YXIpO1xyXG5cclxuLy8g0LzQsNGB0YHQuNCyINGBINC60LDRgNGC0L7Rh9C60LDQvNC4INCy0YHRgtCw0LLQu9GP0LXQvCDQsiDQv9GA0L7QtdC60YJcclxuZnVuY3Rpb24gcmVuZGVyQ2FyZChpdGVtKSB7XHJcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjcmVhdGVDYXJkKGl0ZW0pO1xyXG4gIGNhcmRzTGlzdC5hZGRJdGVtKGNhcmRFbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2FyZEFkZFN1Ym1pdCh7IGxpbmssIG5hbWUgfSkge1xyXG4gIHJlbmRlckxvYWRpbmcoXCJwb3B1cC1jYXJkc1wiLCB0cnVlKTtcclxuICBhcGlcclxuICAgIC5hZGROZXdDYXJkKHsgbmFtZSwgbGluayB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY2FyZHNMaXN0LmFkZEl0ZW0oXHJcbiAgICAgICAgY3JlYXRlQ2FyZCh7XHJcbiAgICAgICAgICBsaW5rOiBkYXRhLmxpbmssXHJcbiAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICBpZDogZGF0YS5faWQsXHJcbiAgICAgICAgICBvd25lcklkOiBkYXRhLm93bmVyLl9pZCxcclxuICAgICAgICAgIGxpa2VDb3VudGVyOiBkYXRhLmxpa2VzLmxlbmd0aCxcclxuICAgICAgICAgIGxpa2VzOiBkYXRhLmxpa2VzLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIHBvcHVwV2l0aENhcmQuY2xvc2UoKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSlcclxuICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgcmVuZGVyTG9hZGluZyhcInBvcHVwLWNhcmRzXCIsIGZhbHNlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVGb3JtU3VibWl0QXZhdGFyKHsgYXZhdGFyIH0pIHtcclxuICByZW5kZXJMb2FkaW5nKFwicG9wdXAtYXZhdGFyXCIsIHRydWUpO1xyXG4gIGFwaVxyXG4gICAgLmFkZFVzZXJBdmF0YXIoeyBhdmF0YXIgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHtcclxuICAgICAgICB1c2VybmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgIGpvYjogZGF0YS5hYm91dCxcclxuICAgICAgICBhdmF0YXI6IGRhdGEuYXZhdGFyLFxyXG4gICAgICB9KTtcclxuICAgICAgcG9wdXBBdmF0YXIuY2xvc2UoKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSlcclxuICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgcmVuZGVyTG9hZGluZyhcInBvcHVwLWF2YXRhclwiLCBmYWxzZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdFVzZXIoeyB1c2VybmFtZSwgam9iIH0pIHtcclxuICByZW5kZXJMb2FkaW5nKFwicG9wdXAtZm9ybVwiLCB0cnVlKTtcclxuICBhcGlcclxuICAgIC5hZGRVc2VySW5mbyh7IG5hbWU6IHVzZXJuYW1lLCBhYm91dDogam9iIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB1c2VySW5mby5zZXRVc2VySW5mbyh7XHJcbiAgICAgICAgdXNlcm5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBqb2I6IGRhdGEuYWJvdXQsXHJcbiAgICAgICAgYXZhdGFyOiBkYXRhLmF2YXRhcixcclxuICAgICAgfSk7XHJcbiAgICAgIHBvcHVwV2l0aFByb2ZpbGUuY2xvc2UoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pXHJcbiAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgIHJlbmRlckxvYWRpbmcoXCJwb3B1cC1mb3JtXCIsIGZhbHNlKTtcclxuICAgIH0pO1xyXG59XHJcbi8vINC/0YDQvtC80LjRgSDQtNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINC00LDQvdC90YvRhSDQutCw0YDRgtC40L3QutC4INC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG5Qcm9taXNlLmFsbChbaW5pdGlhbGNhcmRzLCBnZXRVc2VySW5mb0FwaV0pXHJcbiAgLnRoZW4oKFtjYXJkc0luaXQsIGdldFVzZXJJbmZvQXBpXSkgPT4ge1xyXG4gICAgdXNlckluZm8uc2V0VXNlcklkKGdldFVzZXJJbmZvQXBpLl9pZCk7XHJcbiAgICBjYXJkc0xpc3QucmVuZGVySXRlbXMoY2FyZHNJbml0KTtcclxuICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHtcclxuICAgICAgdXNlcm5hbWU6IGdldFVzZXJJbmZvQXBpLm5hbWUsXHJcbiAgICAgIGpvYjogZ2V0VXNlckluZm9BcGkuYWJvdXQsXHJcbiAgICAgIGF2YXRhcjogZ2V0VXNlckluZm9BcGkuYXZhdGFyLFxyXG4gICAgfSk7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9KTtcclxuXHJcbi8vINGB0LvRg9GI0LDRgtC10LvQuFxyXG5cclxuLy8g0L7RgtC60YDRi9GC0LjQtSDQv9C+0L8t0LDQv9CwINC00L7QsdC+0LLQu9C10L3QuNGPINC60LDRgNGC0LjQvdC60LhcclxuY2FyZE9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICB2YWxpZGl0eUNhcmQuZGlzYWJsZVN1Ym1pdEJ1dHRvbigpO1xyXG4gIHBvcHVwV2l0aENhcmQub3BlbigpO1xyXG59KTtcclxuXHJcbi8v0KHQvtGF0YDQsNC90LXQvdC40LUg0LTQsNC90L3Ri9GFINC00LvRjyDQv9C+0L8t0LDQv9CwINGE0L7RgNC80Ysg0L/RgNC+0YTQuNC70YxcclxucHJvZmlsZU9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICB2YWxpZGl0eUZvcm0uZGlzYWJsZVN1Ym1pdEJ1dHRvbigpO1xyXG4gIGNvbnN0IHsgdXNlcm5hbWUsIGpvYiB9ID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICBuYW1lSW5wdXQudmFsdWUgPSB1c2VybmFtZTsgLy/Qt9Cw0L/QuNGB0YvQstCw0LXQvCDQtNCw0L3QvdGL0LUg0LIg0LjQvdC/0YPRgiDQuNC3INC/0YDQvtGE0LDQudC70LBcclxuICBqb2JJbnB1dC52YWx1ZSA9IGpvYjtcclxuICBwb3B1cFdpdGhQcm9maWxlLm9wZW4oKTtcclxufSk7XHJcblxyXG4vL9C+0YLQutGA0YvRgtC40LUg0L/QvtC/0LDQv9CwINGBINCw0LLQsNGC0LDRgNC+0LxcclxuYXZhdGFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgdmFsaWRpdHlBdmF0YXIuZGlzYWJsZVN1Ym1pdEJ1dHRvbigpO1xyXG4gIHBvcHVwQXZhdGFyLm9wZW4oKTtcclxufSk7XHJcblxyXG4vLyBcclxudmFsaWRpdHlGb3JtLmVuYWJsZVZhbGlkYXRpb24oKTtcclxudmFsaWRpdHlDYXJkLmVuYWJsZVZhbGlkYXRpb24oKTtcclxudmFsaWRpdHlBdmF0YXIuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxucG9wdXBXaXRoT3BlbkltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbnBvcHVwQ29uZmlybS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5wb3B1cFdpdGhQcm9maWxlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbnBvcHVwV2l0aENhcmQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxucG9wdXBBdmF0YXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuIl0sIm5hbWVzIjpbIkFwaSIsImNvbmZpZyIsIl9iYXNlVXJsIiwiYmFzZVVybCIsIl9oZWFkZXJzIiwiaGVhZGVycyIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXMiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJfaGFuZGxlUHJvbWlzZUVyciIsImRhdGEiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImF2YXRhciIsImlkIiwiQ2FyZCIsImNhcmRTZWxlY3RvciIsInVzZXJJZCIsImhhbmRsZUNhcmRDbGljayIsImhhbmRsZUJpbkNsaWNrIiwiaGFuZGxlTGlrZUNsaWNrIiwiX3RleHQiLCJuYW1lIiwiX2ltYWdlIiwibGluayIsIl9pZCIsIl9saWtlcyIsImxpa2VzIiwiX293bmVySWQiLCJvd25lcklkIiwiX2NhcmRTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfdXNlcklkIiwiX2hhbmRsZUJpbkNsaWNrIiwiX2hhbmRsZUxpa2VDbGljayIsIl9saWtlc1VzZXIiLCJzb21lIiwiaXRlbSIsIl9saWtlQ291bnRlciIsImxpa2VDb3VudGVyIiwicGhvdG9DYXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwiX2dldFRlbXBsYXRlIiwiX3Bob3RvSW1hZ2UiLCJzcmMiLCJhbHQiLCJ0ZXh0Q29udGVudCIsIl9iaW5FbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiX2VsZW1lbnRMaWtlQnV0dG9uIiwiX2VsZW1lbnRMaWtlQ291bnRlciIsIl9zZXRFdmVudExpc3RlbmVycyIsImxlbmd0aCIsImlzTGlrZWQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwiRm9ybVZhbGlkYXRvciIsImZvcm1MaXN0IiwiX2Zvcm1TZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtTGlzdCIsIl9idXR0b25FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZXJyb3JFbGVtZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaW5wdXRMaXN0IiwidmFsaWRpdHkiLCJ2YWxpZCIsImRpc2FibGVkIiwiX2hhc0ludmFsaWRJbnB1dCIsImRpc2FibGVTdWJtaXRCdXR0b24iLCJfZW5hYmxlU3VibWl0QnV0dG9uIiwiX3Nob3dJbnB1dEVycm9yIiwiX2hpZGVJbnB1dEVycm9yIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwia2V5IiwiY2xvc2UiLCJfcG9wdXAiLCJfaGFuZGxlRXNjQ2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsIlBvcHVwV2l0aEZvcm0iLCJoYW5kbGVGb3JtU3VibWl0IiwiX3BvcHVwRm9ybUNhcmQiLCJfaGFuZGxlRm9ybVN1Ym1pdCIsImlucHV0VmFsdWVzIiwiaW5wdXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZSIsImltYWdlUGhvdG8iLCJpbWFnZVRleHQiLCJfaW1hZ2VQaG90byIsIl9pbWFnZVRleHQiLCJjYXJkbmFtZSIsIlBvcHVwV2l0aFN1Ym1pdCIsIl9mb3JtQ29uZmlybSIsIm15Q2FyZCIsIlNlY3Rpb24iLCJyZW5kZXJlciIsImNvbnRhaW5lclNlbGVjdG9yIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImNhcmRFbGVtZW50IiwicHJlcGVuZCIsIml0ZW1zIiwiVXNlckluZm8iLCJ1c2VybmFtZSIsImpvYiIsIl91c2VybmFtZSIsIl9qb2IiLCJfYXZhdGFyIiwiaW5wdXRVc2VySW5mbyIsInByb2ZpbGVPcGVuQnV0dG9uIiwicHJvZmlsZUZvcm0iLCJuYW1lSW5wdXQiLCJqb2JJbnB1dCIsImNhcmRzUG9wdXAiLCJjYXJkT3BlbkJ1dHRvbiIsImZvcm1DYXJkIiwiYXZhdGFyQnV0dG9uIiwiYXZhdGFyUG9wdXAiLCJyZW5kZXJMb2FkaW5nIiwicG9wdXAiLCJpc0xvYWRpbmciLCJjdXJyZW50QWN0aXZlQnV0dG9uIiwiaW5pdGlhbENhcmRzIiwib2JqIiwiYXBpIiwiYXV0aG9yaXphdGlvbiIsInZhbGlkaXR5Rm9ybSIsInZhbGlkaXR5Q2FyZCIsInZhbGlkaXR5QXZhdGFyIiwicG9wdXBXaXRoT3BlbkltYWdlIiwib3BlbiIsInBvcHVwQ29uZmlybSIsImNyZWF0ZUNhcmQiLCJjYXJkIiwiY29uZmlybURlbGV0ZU15Q2FyZCIsImRlbGV0ZU5ld0NhcmQiLCJnZXRJZCIsImhhbmRsZURlbGV0ZUJpbkNsaWNrIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9uIiwiZGVsZXRlTGlrZSIsInB1dExpa2VDYXJkIiwidG9nZ2xlTGlrZXNTdGF0ZSIsInVzZXJJbmZvIiwiZ2V0VXNlcklkIiwiZ2VuZXJhdGVDYXJkIiwiY2FyZHNMaXN0IiwicmVuZGVyQ2FyZCIsImluaXRpYWxjYXJkcyIsImdldEluaXRpYWxDYXJkcyIsInJlc3VsdCIsImNhcmRzSW5pdCIsIm1hcCIsIm93bmVyIiwicG9wdXBXaXRoQ2FyZCIsImhhbmRsZUNhcmRBZGRTdWJtaXQiLCJnZXRVc2VySW5mb0FwaSIsImdldFVzZXJJbmZvRnJvbUFwaSIsInBvcHVwV2l0aFByb2ZpbGUiLCJoYW5kbGVGb3JtU3VibWl0VXNlciIsInBvcHVwQXZhdGFyIiwiaGFuZGxlRm9ybVN1Ym1pdEF2YXRhciIsImFkZEl0ZW0iLCJhZGROZXdDYXJkIiwiZmluYWxseSIsImFkZFVzZXJBdmF0YXIiLCJzZXRVc2VySW5mbyIsImFib3V0IiwiYWRkVXNlckluZm8iLCJhbGwiLCJzZXRVc2VySWQiLCJyZW5kZXJJdGVtcyIsImdldFVzZXJJbmZvIiwiZW5hYmxlVmFsaWRhdGlvbiIsInNldEV2ZW50TGlzdGVuZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==
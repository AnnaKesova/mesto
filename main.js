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
      var _this = this;

      return this._likes.some(function (item) {
        return item._id === _this._userId;
      });
    } //присваеваем классы значениям карточек

  }, {
    key: "generateCard",
    value: function generateCard() {
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

      this._toggleLikesState();

      this._setEventListeners();

      return this._element;
    }
  }, {
    key: "setLikes",
    value: function setLikes(data) {
      this._likes = data.likes;

      this._toggleLikesState();
    }
  }, {
    key: "_toggleLikesState",
    value: function _toggleLikesState() {
      this._elementLikeCounter = this._element.querySelector(".photo__numlike");
      this._elementLikeCounter.textContent = this._likes.length;

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
      var _this2 = this;

      // like
      this._elementLikeButton.addEventListener("click", function (evt) {
        _this2._handleLikeClick(evt);
      }); // bin


      this._element.querySelector(".photo__bin").addEventListener("click", function () {
        _this2._handleBinClick();
      }); // открытие картинки


      this._photoImage.addEventListener("click", function () {
        _this2._handleCardClick(_this2._text, _this2._image);
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
        card.setLikes(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VVMsVUFBQ0MsR0FBRCxFQUFTO0VBQ2RDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsQ0FaSCxHQWNBO0FBRUE7O0FBQ0F6Qiw0RUFBQSxDQUFnQyxPQUFoQyxFQUF5QyxZQUFZO0VBQ25EYSxZQUFZLENBQUN4RSxtQkFBYjtFQUNBc0csYUFBYSxDQUFDM0IsSUFBZDtBQUNELENBSEQsR0FLQTs7QUFDQXJCLCtFQUFBLENBQW1DLE9BQW5DLEVBQTRDLFlBQVk7RUFDdERpQixZQUFZLENBQUN2RSxtQkFBYjs7RUFDQSw0QkFBMEIyRixRQUFRLENBQUM2QixXQUFULEVBQTFCO0VBQUEsSUFBUXhFLFFBQVIseUJBQVFBLFFBQVI7RUFBQSxJQUFrQkMsR0FBbEIseUJBQWtCQSxHQUFsQjs7RUFDQU8sNERBQUEsR0FBa0JSLFFBQWxCLENBSHNELENBRzFCOztFQUM1QlMsMkRBQUEsR0FBaUJSLEdBQWpCO0VBQ0F5RCxnQkFBZ0IsQ0FBQy9CLElBQWpCO0FBQ0QsQ0FORCxHQVFBOztBQUNBZCwwRUFBQSxDQUE4QixPQUE5QixFQUF1QyxZQUFZO0VBQ2pEWSxjQUFjLENBQUN6RSxtQkFBZjtFQUNBNEcsV0FBVyxDQUFDakMsSUFBWjtBQUNELENBSEQsR0FLQTs7QUFDQUosWUFBWSxDQUFDa0QsZ0JBQWI7QUFDQWpELFlBQVksQ0FBQ2lELGdCQUFiO0FBQ0FoRCxjQUFjLENBQUNnRCxnQkFBZjtBQUVBL0Msa0JBQWtCLENBQUNnRCxpQkFBbkI7QUFDQTlDLFlBQVksQ0FBQzhDLGlCQUFiO0FBQ0FoQixnQkFBZ0IsQ0FBQ2dCLGlCQUFqQjtBQUNBcEIsYUFBYSxDQUFDb0IsaUJBQWQ7QUFDQWQsV0FBVyxDQUFDYyxpQkFBWixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoU3VibWl0LmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICB0aGlzLl9iYXNlVXJsID0gY29uZmlnLmJhc2VVcmw7XHJcbiAgICB0aGlzLl9oZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlUHJvbWlzZUVycihyZXMpIHtcclxuICAgIHJldHVybiByZXMub2sgPyByZXMuanNvbigpIDogUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xyXG4gIH1cclxuXHJcbiAgLy8g0L/QvtC70YPRh9C10L3QuNC1INC00LDQvdC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICBnZXRVc2VySW5mb0Zyb21BcGkoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgIH0pLnRoZW4odGhpcy5faGFuZGxlUHJvbWlzZUVycik7XHJcbiAgfVxyXG4gIC8vINC/0L7Qu9GD0YfQtdC90LjQtSDQutCw0YDRgtC40L3QvtC6XHJcbiAgZ2V0SW5pdGlhbENhcmRzKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzYCwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICB9KS50aGVuKHRoaXMuX2hhbmRsZVByb21pc2VFcnIpO1xyXG4gIH1cclxuXHJcbiAgLy/QtNC+0LHQsNCy0LjRgtGMINC90L7QstC+0LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICBhZGRVc2VySW5mbyhkYXRhKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pLnRoZW4odGhpcy5faGFuZGxlUHJvbWlzZUVycik7XHJcbiAgfVxyXG5cclxuICAvL9CU0L7QsdCw0LLQuNGC0Ywg0L3QvtCy0YPRjiDQutCw0YDRgtC40L3QutGDLlxyXG4gIGFkZE5ld0NhcmQoZGF0YSkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pLnRoZW4odGhpcy5faGFuZGxlUHJvbWlzZUVycik7XHJcbiAgfVxyXG5cclxuICAvL9C00L7QsdCw0LLQuNGC0Ywg0L3QvtCy0L7Qs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gIGFkZFVzZXJBdmF0YXIoYXZhdGFyKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYXZhdGFyKSxcclxuICAgIH0pLnRoZW4odGhpcy5faGFuZGxlUHJvbWlzZUVycik7XHJcbiAgfVxyXG5cclxuICAvL9Cj0LTQsNC70LjRgtGMINC90L7QstGD0Y4g0LrQsNGA0YLQuNC90LrRgy5cclxuICBkZWxldGVOZXdDYXJkKGlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHMvJHtpZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgIH0pLnRoZW4odGhpcy5faGFuZGxlUHJvbWlzZUVycik7XHJcbiAgfVxyXG5cclxuICAvL9CU0L7QsdCw0LLQuNGC0YwgbGlrZSDQutCw0YDRgtC40L3QutC1LlxyXG4gIHB1dExpa2VDYXJkKGlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHMvJHtpZH0vbGlrZXNgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgIH0pLnRoZW4odGhpcy5faGFuZGxlUHJvbWlzZUVycik7XHJcbiAgfVxyXG5cclxuICAvL9Cj0LTQsNC70LjRgtGMIGxpa2Ug0LrQsNGA0YLQuNC90LrQuC5cclxuICBkZWxldGVMaWtlKGlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHMvJHtpZH0vbGlrZXNgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgIH0pLnRoZW4odGhpcy5faGFuZGxlUHJvbWlzZUVycik7XHJcbiAgfVxyXG59XHJcbiIsIi8vINC60LvQsNGB0YEg0YHQvtC30LTQsNC90LjRjyDQutCw0YDRgtC+0YfQutC4XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIC8v0LTQsNC90L3Ri9C1INC60LDRgNGC0L7Rh9C60Lgg0LggdGVtcGxhdGVcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHsgZGF0YSwgaGFuZGxlQ2FyZENsaWNrLCBoYW5kbGVCaW5DbGljaywgaGFuZGxlTGlrZUNsaWNrIH0sXHJcbiAgICBjYXJkU2VsZWN0b3IsXHJcbiAgICB1c2VySWRcclxuICApIHtcclxuICAgIHRoaXMuX3RleHQgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9pbWFnZSA9IGRhdGEubGluaztcclxuICAgIHRoaXMuX2lkID0gZGF0YS5pZDtcclxuICAgIHRoaXMuX2xpa2VzID0gZGF0YS5saWtlcztcclxuICAgIHRoaXMuX293bmVySWQgPSBkYXRhLm93bmVySWQ7XHJcbiAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XHJcbiAgICB0aGlzLl91c2VySWQgPSB1c2VySWQ7XHJcbiAgICB0aGlzLl9oYW5kbGVCaW5DbGljayA9IGhhbmRsZUJpbkNsaWNrO1xyXG4gICAgdGhpcy5faGFuZGxlTGlrZUNsaWNrID0gaGFuZGxlTGlrZUNsaWNrO1xyXG4gICAgdGhpcy5fbGlrZUNvdW50ZXIgPSBkYXRhLmxpa2VDb3VudGVyO1xyXG4gIH1cclxuXHJcbiAgX2dldFRlbXBsYXRlKCkge1xyXG4gICAgY29uc3QgcGhvdG9DYXJkID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvXCIpXHJcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIHBob3RvQ2FyZDtcclxuICB9XHJcblxyXG4gIGdldElkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gIH1cclxuXHJcbiAgaXNMaWtlZCgpIHtcclxuICAgIHJldHVybiAgdGhpcy5fbGlrZXMuc29tZSgoaXRlbSkgPT4gaXRlbS5faWQgPT09IHRoaXMuX3VzZXJJZCk7XHJcbiAgfVxyXG5cclxuICAvL9C/0YDQuNGB0LLQsNC10LLQsNC10Lwg0LrQu9Cw0YHRgdGLINC30L3QsNGH0LXQvdC40Y/QvCDQutCw0YDRgtC+0YfQtdC6XHJcbiAgZ2VuZXJhdGVDYXJkKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcbiAgICAvLyDQlNC+0LHQvtCy0LvRj9C10Lwg0LTQsNC90L3Ri9C1XHJcbiAgICB0aGlzLl9waG90b0ltYWdlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvX19pbWFnZVwiKTtcclxuXHJcbiAgICB0aGlzLl9waG90b0ltYWdlLnNyYyA9IHRoaXMuX2ltYWdlO1xyXG4gICAgdGhpcy5fcGhvdG9JbWFnZS5hbHQgPSB0aGlzLl90ZXh0O1xyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvX190ZXh0XCIpLnRleHRDb250ZW50ID0gdGhpcy5fdGV4dDtcclxuICAgIC8vIGJpblxyXG4gICAgdGhpcy5fYmluRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90b19fYmluXCIpO1xyXG4gICAgaWYgKHRoaXMuX293bmVySWQgPT09IHRoaXMuX3VzZXJJZCkge1xyXG4gICAgICB0aGlzLl9iaW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwaG90b19fYmluX2FjdGl2ZVwiKTtcclxuICAgIH1cclxuICAgIC8vIGxpa2VcclxuICAgIHRoaXMuX2VsZW1lbnRMaWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvX192ZWN0b3JcIik7XHJcbiAgIHRoaXMuX3RvZ2dsZUxpa2VzU3RhdGUoKVxyXG5cclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICB9XHJcbiAgXHJcbiAgc2V0TGlrZXMoZGF0YSkge1xyXG4gICAgdGhpcy5fbGlrZXMgPSBkYXRhLmxpa2VzO1xyXG4gICAgdGhpcy5fdG9nZ2xlTGlrZXNTdGF0ZSgpO1xyXG4gIH1cclxuICBcclxuICBfdG9nZ2xlTGlrZXNTdGF0ZSgpIHtcclxuICAgIHRoaXMuX2VsZW1lbnRMaWtlQ291bnRlciA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90b19fbnVtbGlrZVwiKTtcclxuICAgIHRoaXMuX2VsZW1lbnRMaWtlQ291bnRlci50ZXh0Q29udGVudCA9IHRoaXMuX2xpa2VzLmxlbmd0aDtcclxuICAgIGlmICh0aGlzLmlzTGlrZWQoKSkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50TGlrZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGhvdG9fX3ZlY3Rvcl9hY3RpdmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9lbGVtZW50TGlrZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwicGhvdG9fX3ZlY3Rvcl9hY3RpdmVcIik7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9iaW5cclxuICBoYW5kbGVEZWxldGVCaW5DbGljaygpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIC8vIGxpa2VcclxuICAgIHRoaXMuX2VsZW1lbnRMaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayhldnQpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBiaW5cclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90b19fYmluXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUJpbkNsaWNrKCk7XHJcbiAgICB9KTtcclxuICAgIC8vINC+0YLQutGA0YvRgtC40LUg0LrQsNGA0YLQuNC90LrQuFxyXG4gICAgdGhpcy5fcGhvdG9JbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sodGhpcy5fdGV4dCwgdGhpcy5faW1hZ2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihkYXRhLCBmb3JtTGlzdCkge1xyXG4gICAgdGhpcy5fZm9ybVNlbGVjdG9yID0gZGF0YS5mb3JtU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gZGF0YS5pbnB1dFNlbGVjdG9yO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBkYXRhLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xyXG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IGRhdGEuaW5hY3RpdmVCdXR0b25DbGFzcztcclxuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IGRhdGEuaW5wdXRFcnJvckNsYXNzO1xyXG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IGRhdGEuZXJyb3JDbGFzcztcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5faW5wdXRTZWxlY3RvcilcclxuICAgIHRoaXMuX2Zvcm1MaXN0ID0gZm9ybUxpc3Q7XHJcbiAgICAvL2NvbnNvbGUubG9nIChmb3JtTGlzdClcclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSB0aGlzLl9mb3JtTGlzdC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8v0L/QvtC60LDQt9GL0LLQsNC10YIg0Y3Qu9C10LzQtdC90YIg0L7RiNC40LHQutC4XHJcbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUxpc3QucXVlcnlTZWxlY3RvcihcclxuICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXHJcbiAgICApO1xyXG4gICAgLy8gY29uc29sZS5sb2coZXJyb3JFbGVtZW50KVxyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLy8g0YHQutGA0YvQstCw0LXRgiDRjdC70LXQvNC10L3RgiDQvtGI0LjQsdC60LhcclxuICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtTGlzdC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcclxuICAgICk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGVycm9yRWxlbWVudCk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgLy8g0L/RgNC+0LLQtdGA0LrQsCDQuNC90L/Rg9GC0L7QsiDQtNC70Y8g0LrQvdC+0L/QutC4XHJcbiAgX2hhc0ludmFsaWRJbnB1dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnB1dExpc3Quc29tZSgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyDRhNGD0L3QutGG0LjRjyDQsdC70L7QutC40YDQvtCy0LrQuCDQutC90L7Qv9C60LhcclxuICBkaXNhYmxlU3VibWl0QnV0dG9uKCkge1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG5cclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLl9idXR0b25FbGVtZW50KVxyXG4gIH1cclxuXHJcbiAgX2VuYWJsZVN1Ym1pdEJ1dHRvbigpIHtcclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vINGE0YPQvdC60YbQuNGPINC/0LXRgNC10LrQu9GO0YfQtdC90LjRjyDQutC90L7Qv9C60LhcclxuXHJcbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgLy8g0JXRgdC70Lgg0LXRgdGC0Ywg0YXQvtGC0Y8g0LHRiyDQvtC00LjQvSDQvdC10LLQsNC70LjQtNC90YvQuSDQuNC90L/Rg9GCXHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KCkpIHtcclxuICAgICAgLy8g0YHQtNC10LvQsNC5INC60L3QvtC/0LrRgyDQvdC10LDQutGC0LjQstC90L7QuVxyXG4gICAgICB0aGlzLmRpc2FibGVTdWJtaXRCdXR0b24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vINC40L3QsNGH0LUg0YHQtNC10LvQsNC5INC60L3QvtC/0LrRgyDQsNC60YLQuNCy0L3QvtC5XHJcbiAgICAgIHRoaXMuX2VuYWJsZVN1Ym1pdEJ1dHRvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0L/RgNC+0LLQtdGA0LrQsCDQvdCwINCy0LDQu9C40LTQvdC+0YHRgtGMINC/0L7Qu9C10LlcclxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xyXG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UpXHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0YTRg9C90LrRhtC40Y8g0L/QtdGA0LXQsdC+0YDQsCDQstGB0LXRhSBpbnB1dHMg0YTQvtGA0LxcclxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcclxuICAgICAgdGhpcy5fZm9ybUxpc3QucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxyXG4gICAgKTtcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5faW5wdXRMaXN0KVxyXG5cclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICAvL9GE0YPQvdC60YbQuNGPINC+0YLQutGA0YvRgtC40Y8g0L/QvtC/LdCw0L/QvtCyXHJcbiAgb3BlbigpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9hY3RpdmVcIik7IC8v0YTRg9C90LrRhtC40Y8g0LTQu9GPINC+0YLQutGA0YvRgtC40Y8g0L/QvtC/LdCw0L/QsFxyXG4gIH1cclxuICAvL9GE0YPQvdC60YbQuNGPINC30LDQutGA0YvRgtC40Y8g0L/QvtC/LdCw0L/QvtCyXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfYWN0aXZlXCIpOyAvL9GE0YPQvdC60YbQuNGPINC00LvRjyDQt9Cw0LrRgNGL0YLQuNGPXHJcbiAgfVxyXG5cclxuICAvL9C30LDQutGA0YvRgtC40LUg0L/QvtC/LdCw0L/QsCDQvdCwIGVzY3VwXHJcbiAgX2hhbmRsZUVzY0Nsb3NlID0gKGV2dCkgPT4ge1xyXG4gICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8v0YHQu9GD0YjQsNGC0LXQu9GMINC00LvRjyDQt9Cw0LrRgNGL0YLQuNGPINC/0L7Qvy3QsNC/0LAg0L3QsCBvdmVybGF5INC4INC60YDQtdGB0YLQuNC6XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGV2ZW50LnRhcmdldCA9PT0gdGhpcy5fcG9wdXAgfHxcclxuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfX2Nsb3NlXCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0KSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX3BvcHVwRm9ybUNhcmQgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XHJcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20oXHJcbiAgICAgIHRoaXMuX3BvcHVwRm9ybUNhcmQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pdGVtXCIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgY29uc3QgaW5wdXRWYWx1ZXMgPSB7fTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpbnB1dFZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhpbnB1dFZhbHVlcylcclxuICAgIHJldHVybiBpbnB1dFZhbHVlcztcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuX3BvcHVwRm9ybUNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgfSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQpXHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB0aGlzLl9wb3B1cEZvcm1DYXJkLnJlc2V0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG4vL9C/0L7Qvy3Qv9Cw0L8g0YEg0LrQsNGA0YLQuNC90LrQvtC5XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciwgaW1hZ2VQaG90bywgaW1hZ2VUZXh0IH0pIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5faW1hZ2VQaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW1hZ2VQaG90byk7XHJcbiAgICB0aGlzLl9pbWFnZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGltYWdlVGV4dCk7XHJcbiAgfVxyXG4gIC8vINC+0YLQutGA0YvRgtC40LUg0L/QvtC/LdCw0L/QsFxyXG4gIG9wZW4oY2FyZG5hbWUsIGxpbmspIHtcclxuICAgIHRoaXMuX2ltYWdlUGhvdG8uc3JjID0gbGluaztcclxuICAgIHRoaXMuX2ltYWdlUGhvdG8uYWx0ID0gY2FyZG5hbWU7XHJcbiAgICB0aGlzLl9pbWFnZVRleHQudGV4dENvbnRlbnQgPSBjYXJkbmFtZTtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhTdWJtaXQgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0IH0pIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XHJcbiAgICB0aGlzLl9mb3JtQ29uZmlybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb25maXJtXCIpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fZm9ybUNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbmZpcm1EZWxldGVNeUNhcmQobXlDYXJkKSB7XHJcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gbXlDYXJkO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3RvcihyZW5kZXJlciwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIC8vINC00L7QsdCw0LLQu9C10L3QvdCw0Y8g0LrQsNGA0YLQvtGH0LrQsCDQvtGC0YDQuNGB0L7QstGL0LLQsNC10YLRgdGPINCyINC90LDRh9Cw0LvQtVxyXG4gIGFkZEl0ZW0oY2FyZEVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGNhcmRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHJlbmRlckl0ZW1zKGl0ZW1zKSB7XHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICBjb25zdHJ1Y3Rvcih7IHVzZXJuYW1lLCBqb2IsIGF2YXRhciB9KSB7XHJcbiAgICB0aGlzLl91c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlcm5hbWUpO1xyXG4gICAgdGhpcy5fam9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihqb2IpO1xyXG4gICAgdGhpcy5fYXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhdmF0YXIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICBjb25zdCBpbnB1dFVzZXJJbmZvID0ge1xyXG4gICAgICB1c2VybmFtZTogdGhpcy5fdXNlcm5hbWUudGV4dENvbnRlbnQsXHJcbiAgICAgIGpvYjogdGhpcy5fam9iLnRleHRDb250ZW50LFxyXG4gICAgfTtcclxuICAgIHJldHVybiBpbnB1dFVzZXJJbmZvO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlckluZm8oeyB1c2VybmFtZSwgam9iLCBhdmF0YXIgfSkge1xyXG4gICAgKHRoaXMuX2pvYi50ZXh0Q29udGVudCA9IGpvYiksICh0aGlzLl91c2VybmFtZS50ZXh0Q29udGVudCA9IHVzZXJuYW1lKTtcclxuICAgIHRoaXMuX2F2YXRhci5zcmMgPSBhdmF0YXI7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXNlcklkO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlcklkKGlkKSB7XHJcbiAgICB0aGlzLl91c2VySWQgPSBpZDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IHtcclxuICBwcm9maWxlT3BlbkJ1dHRvbixcclxuICBwcm9maWxlRm9ybSxcclxuICBuYW1lSW5wdXQsXHJcbiAgam9iSW5wdXQsXHJcbiAgY2FyZHNQb3B1cCxcclxuICBjYXJkT3BlbkJ1dHRvbixcclxuICBmb3JtQ2FyZCxcclxuICBhdmF0YXJCdXR0b24sXHJcbiAgYXZhdGFyUG9wdXAsXHJcbiAgcmVuZGVyTG9hZGluZyxcclxufTtcclxuXHJcbmNvbnN0IHByb2ZpbGVPcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1vcGVuXCIpOyAvL9C60L3QvtC/0LrQsCDQvtGC0LrRgNGL0YLQuNGPINC/0L7Qvy3QsNC/0LBcclxuY29uc3QgcHJvZmlsZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcHJvZmlsZVwiKTtcclxuLy8g0J3QsNGF0L7QtNC40Lwg0L/QvtC70Y8g0YTQvtGA0LzRiyDQsiBET01cclxuY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19pdGVtX3R5cGVfdXNlcm5hbWVcIik7IC8vINCS0L7RgdC/0L7Qu9GM0LfRg9C50YLQtdGB0Ywg0LjQvdGB0YLRgNGD0LzQtdC90YLQvtC8IC5xdWVyeVNlbGVjdG9yKClcclxuY29uc3Qgam9iSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2l0ZW1fdHlwZV9qb2JcIik7IC8vINCS0L7RgdC/0L7Qu9GM0LfRg9C50YLQtdGB0Ywg0LjQvdGB0YLRgNGD0LzQtdC90YLQvtC8IC5xdWVyeVNlbGVjdG9yKClcclxuXHJcbmNvbnN0IGNhcmRzUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLWNhcmRzXCIpOyAvL9C/0L7Qvy3Qv9Cw0L8g0YTQvtGA0LzRiyDRgSDQutCw0YDRgtC40L3QutCw0LzQuFxyXG5jb25zdCBjYXJkT3BlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLW9wZW5cIik7IC8v0LrQvdC+0L/QutCwINC+0YLQutGA0YvRgtC40Y8g0YTQvtGA0LzRiyDQv9C+0L8t0LDQv9CwINGBINC60LDRgNGC0LjQvdC60LDQvNC4XHJcblxyXG4vL2NvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fZWxlbWVudHNcIik7IC8vINGB0L/QuNGB0L7QuiDQutC+0L3RgtC10LnQvdC10YBcclxuY29uc3QgZm9ybUNhcmQgPSBjYXJkc1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jYXJkXCIpOyAvL9C00LvRjyDRgdC+0LfQtNCw0L3QuNGPINC60LDRgNGC0L7Rh9C60Lgg0LrQsNGA0YLQuNC90LrQuFxyXG5jb25zdCBhdmF0YXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtcGhvdG9cIik7XHJcbmNvbnN0IGF2YXRhclBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1hdmF0YXJcIik7XHJcblxyXG5jb25zdCByZW5kZXJMb2FkaW5nID0gKHBvcHVwLCBpc0xvYWRpbmcgPSBmYWxzZSkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRBY3RpdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwb3B1cH0gLnBvcHVwX19zYXZlYCk7XHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgY3VycmVudEFjdGl2ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwi0JfQsNCz0YDRg9C30LrQsC4uLlwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjdXJyZW50QWN0aXZlQnV0dG9uLnRleHRDb250ZW50ID0gXCLQodC+0YXRgNCw0L3QuNGC0YxcIjtcclxuICB9XHJcbn07XHJcbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcItCQ0YDRhdGL0LdcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2Fya2h5ei5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwi0KfQtdC70Y/QsdC40L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjFwiLFxyXG4gICAgbGluazogXCJodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvY2hlbHlhYmluc2stb2JsYXN0LmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCLQmNCy0LDQvdC+0LLQvlwiLFxyXG4gICAgbGluazogXCJodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvaXZhbm92by5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwi0JrQsNC80YfQsNGC0LrQsFwiLFxyXG4gICAgbGluazogXCJodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQva2FtY2hhdGthLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCLQpdC+0LvQvNC+0LPQvtGA0YHQutC40Lkg0YDQsNC50L7QvVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQva2hvbG1vZ29yc2t5LXJheW9uLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCLQkdCw0LnQutCw0LtcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2JhaWthbC5qcGdcIixcclxuICB9LFxyXG5dO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcclxuaW1wb3J0IFwiLi4vcGFnZXMvaW5kZXguY3NzXCI7XHJcbmltcG9ydCBBcGkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhTdWJtaXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoU3VibWl0LmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgcHJvZmlsZU9wZW5CdXR0b24sXHJcbiAgcHJvZmlsZUZvcm0sXHJcbiAgbmFtZUlucHV0LFxyXG4gIGpvYklucHV0LFxyXG4gIGNhcmRzUG9wdXAsXHJcbiAgY2FyZE9wZW5CdXR0b24sXHJcbiAgZm9ybUNhcmQsXHJcbiAgYXZhdGFyQnV0dG9uLFxyXG4gIGF2YXRhclBvcHVwLFxyXG4gIHJlbmRlckxvYWRpbmcsXHJcbn0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzLmpzXCI7XHJcblxyXG5jb25zdCBvYmogPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiBcIi5mb3JtXCIsXHJcbiAgaW5wdXRTZWxlY3RvcjogXCIuZm9ybV9faXRlbVwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5wb3B1cF9fc2F2ZVwiLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwicG9wdXBfX3NhdmVfZGlzYWJsZWRcIixcclxuICBpbnB1dEVycm9yQ2xhc3M6IFwiZm9ybV9faXRlbS1lcnJvcl9hY3RpdmVcIixcclxuICBlcnJvckNsYXNzOiBcImZvcm1fX2l0ZW1fdHlwZV9lcnJvclwiLFxyXG59O1xyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaSh7XHJcbiAgYmFzZVVybDogXCJodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTQxL1wiLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIGF1dGhvcml6YXRpb246IFwiY2NlMmRjNmQtZmNlMC00YWRiLTgwZjYtOGI4ZmNlMzA2NzU0XCIsXHJcbiAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9LFxyXG59KTtcclxuXHJcbi8v0LLQsNC70LjQtNCw0YbQuNGPINGE0L7RgNC8XHJcbmNvbnN0IHZhbGlkaXR5Rm9ybSA9IG5ldyBGb3JtVmFsaWRhdG9yKG9iaiwgcHJvZmlsZUZvcm0pO1xyXG5jb25zdCB2YWxpZGl0eUNhcmQgPSBuZXcgRm9ybVZhbGlkYXRvcihvYmosIGZvcm1DYXJkKTtcclxuY29uc3QgdmFsaWRpdHlBdmF0YXIgPSBuZXcgRm9ybVZhbGlkYXRvcihvYmosIGF2YXRhclBvcHVwKTtcclxuXHJcbi8v0L/QvtC/LdC/0LDQvyDRgSDQutCw0YDRgtC40L3QutC+0LksINC/0YDQuNGB0LLQvtC10L3QuNC1INC30L3QsNGH0LXQvdC40LkgKNGN0YLQviDQvdC1INCy0L7Qu9GI0LXQsdGB0YLQstC+KVxyXG5jb25zdCBwb3B1cFdpdGhPcGVuSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2Uoe1xyXG4gIHBvcHVwU2VsZWN0b3I6IFwiLnBvcHVwLWltYWdlXCIsXHJcbiAgaW1hZ2VQaG90bzogXCIucG9wdXBfX3Bob3RvXCIsXHJcbiAgaW1hZ2VUZXh0OiBcIi5wb3B1cF9fdGV4dFwiLFxyXG59KTtcclxuLy8g0YTRg9C90LrRhtC40Y8g0LTQu9GPINC+0YLQutGA0YvRgtC40Y8g0L/QvtC/LdC/0LDQv9CwINC60LDRgNGC0LjQvdC60LhcclxuY29uc3QgaGFuZGxlQ2FyZENsaWNrID0gKG5hbWUsIGxpbmspID0+IHtcclxuICBwb3B1cFdpdGhPcGVuSW1hZ2Uub3BlbihuYW1lLCBsaW5rKTtcclxufTtcclxuXHJcbi8v0L/QvtC/0LDQvyDRgdC+0LPQu9Cw0YHQuNGPINC/0YDQuCDRg9C00LDQu9C10L3QuNC4INC60LDRgNGC0LjQvdC60LhcclxuY29uc3QgcG9wdXBDb25maXJtID0gbmV3IFBvcHVwV2l0aFN1Ym1pdCh7IHBvcHVwU2VsZWN0b3I6IFwiLmNvbmZpcm0tcG9wdXBcIiB9KTtcclxuXHJcbi8v0YHQvtC30LTQsNC90LjQtSDQutCw0YDRgtC+0YfQutC4INC4INGC0LXQvNC/0LvQtdC50YLQsCDQuCDRhNGD0L3QutGG0LjRjyDQvtGC0LrRgNGL0YLQuNGPINC60LDRgNGC0LjQvdC60LhcclxuY29uc3QgY3JlYXRlQ2FyZCA9IChpdGVtKSA9PiB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKFxyXG4gICAge1xyXG4gICAgICBkYXRhOiBpdGVtLFxyXG4gICAgICBoYW5kbGVDYXJkQ2xpY2ssXHJcbiAgICAgIGhhbmRsZUJpbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgcG9wdXBDb25maXJtLm9wZW4oKTtcclxuICAgICAgICBwb3B1cENvbmZpcm0uY29uZmlybURlbGV0ZU15Q2FyZCgoKSA9PiB7XHJcbiAgICAgICAgICBhcGlcclxuICAgICAgICAgICAgLmRlbGV0ZU5ld0NhcmQoY2FyZC5nZXRJZCgpKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2FyZC5oYW5kbGVEZWxldGVCaW5DbGljaygpO1xyXG4gICAgICAgICAgICAgIHBvcHVwQ29uZmlybS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBoYW5kbGVMaWtlQ2xpY2s6ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IGNhcmQuZ2V0SWQoKTtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBjYXJkLmlzTGlrZWQoKVxyXG4gICAgICAgICAgPyBhcGkuZGVsZXRlTGlrZShpZClcclxuICAgICAgICAgIDogYXBpLnB1dExpa2VDYXJkKGlkKTtcclxuICAgICAgICBhY3Rpb25cclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuc2V0TGlrZXMoZGF0YSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiLmNhcmQtdGVtcGxhdGVcIixcclxuICAgIHVzZXJJbmZvLmdldFVzZXJJZCgpXHJcbiAgKTtcclxuICByZXR1cm4gY2FyZC5nZW5lcmF0ZUNhcmQoKTtcclxufTtcclxuXHJcbmNvbnN0IGNhcmRzTGlzdCA9IG5ldyBTZWN0aW9uKHJlbmRlckNhcmQsIFwiLmNhcmRzX19lbGVtZW50c1wiKTtcclxuXHJcbmNvbnN0IGluaXRpYWxjYXJkcyA9IGFwaVxyXG4gIC5nZXRJbml0aWFsQ2FyZHMoKVxyXG4gIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIC8vINC+0LHRgNCw0LHQsNGC0YvQstCw0LXQvCDRgNC10LfRg9C70YzRgtCw0YJcclxuICAgIGNvbnN0IGNhcmRzSW5pdCA9IHJlc3VsdC5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgbGluazogaXRlbS5saW5rLFxyXG4gICAgICBpZDogaXRlbS5faWQsXHJcbiAgICAgIG93bmVySWQ6IGl0ZW0ub3duZXIuX2lkLFxyXG4gICAgICBsaWtlczogaXRlbS5saWtlcyxcclxuICAgICAgbGlrZUNvdW50ZXI6IGl0ZW0ubGlrZXMubGVuZ3RoLFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHJldHVybiBjYXJkc0luaXQ7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTsgLy8g0LLRi9Cy0LXQtNC10Lwg0L7RiNC40LHQutGDINCyINC60L7QvdGB0L7Qu9GMXHJcbiAgfSk7XHJcblxyXG4vLyDQv9C+0L8t0L/QsNC/INGBINC60LDRgNGC0LjQvdC60L7QuVxyXG5jb25zdCBwb3B1cFdpdGhDYXJkID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXAtY2FyZHNcIiwgaGFuZGxlQ2FyZEFkZFN1Ym1pdCk7XHJcblxyXG4vLyDQv9C+0L8t0L/QsNC/INC/0YDQvtGE0LjQu9GMXHJcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcclxuICB1c2VybmFtZTogXCIucHJvZmlsZV9fbmFtZVwiLFxyXG4gIGpvYjogXCIucHJvZmlsZV9fam9iXCIsXHJcbiAgYXZhdGFyOiBcIi5wcm9maWxlX19hdmF0YXJcIixcclxufSk7XHJcblxyXG4vL9C/0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0LTQu9GPINC/0YDQvtGE0LjQu9GPXHJcbmNvbnN0IGdldFVzZXJJbmZvQXBpID0gYXBpLmdldFVzZXJJbmZvRnJvbUFwaSgpO1xyXG5cclxuY29uc3QgcG9wdXBXaXRoUHJvZmlsZSA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiLnBvcHVwLWZvcm1cIiwgaGFuZGxlRm9ybVN1Ym1pdFVzZXIpO1xyXG5cclxuLy8g0L/QvtC/0L/QsNC/INC40LfQvNC10L3QtdC90LjRjyDQsNCy0LDRgtCw0YDQsC5cclxuY29uc3QgcG9wdXBBdmF0YXIgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5wb3B1cC1hdmF0YXJcIiwgaGFuZGxlRm9ybVN1Ym1pdEF2YXRhcik7XHJcblxyXG4vLyDQvNCw0YHRgdC40LIg0YEg0LrQsNGA0YLQvtGH0LrQsNC80Lgg0LLRgdGC0LDQstC70Y/QtdC8INCyINC/0YDQvtC10LrRglxyXG5mdW5jdGlvbiByZW5kZXJDYXJkKGl0ZW0pIHtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNyZWF0ZUNhcmQoaXRlbSk7XHJcbiAgY2FyZHNMaXN0LmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDYXJkQWRkU3VibWl0KHsgbGluaywgbmFtZSB9KSB7XHJcbiAgcmVuZGVyTG9hZGluZyhcInBvcHVwLWNhcmRzXCIsIHRydWUpO1xyXG4gIGFwaVxyXG4gICAgLmFkZE5ld0NhcmQoeyBuYW1lLCBsaW5rIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjYXJkc0xpc3QuYWRkSXRlbShcclxuICAgICAgICBjcmVhdGVDYXJkKHtcclxuICAgICAgICAgIGxpbms6IGRhdGEubGluayxcclxuICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgIGlkOiBkYXRhLl9pZCxcclxuICAgICAgICAgIG93bmVySWQ6IGRhdGEub3duZXIuX2lkLFxyXG4gICAgICAgICAgbGlrZUNvdW50ZXI6IGRhdGEubGlrZXMubGVuZ3RoLFxyXG4gICAgICAgICAgbGlrZXM6IGRhdGEubGlrZXMsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgcG9wdXBXaXRoQ2FyZC5jbG9zZSgpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KVxyXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICByZW5kZXJMb2FkaW5nKFwicG9wdXAtY2FyZHNcIiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXRBdmF0YXIoeyBhdmF0YXIgfSkge1xyXG4gIHJlbmRlckxvYWRpbmcoXCJwb3B1cC1hdmF0YXJcIiwgdHJ1ZSk7XHJcbiAgYXBpXHJcbiAgICAuYWRkVXNlckF2YXRhcih7IGF2YXRhciB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdXNlckluZm8uc2V0VXNlckluZm8oe1xyXG4gICAgICAgIHVzZXJuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgam9iOiBkYXRhLmFib3V0LFxyXG4gICAgICAgIGF2YXRhcjogZGF0YS5hdmF0YXIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBwb3B1cEF2YXRhci5jbG9zZSgpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KVxyXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICByZW5kZXJMb2FkaW5nKFwicG9wdXAtYXZhdGFyXCIsIGZhbHNlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVGb3JtU3VibWl0VXNlcih7IHVzZXJuYW1lLCBqb2IgfSkge1xyXG4gIHJlbmRlckxvYWRpbmcoXCJwb3B1cC1mb3JtXCIsIHRydWUpO1xyXG4gIGFwaVxyXG4gICAgLmFkZFVzZXJJbmZvKHsgbmFtZTogdXNlcm5hbWUsIGFib3V0OiBqb2IgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHtcclxuICAgICAgICB1c2VybmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgIGpvYjogZGF0YS5hYm91dCxcclxuICAgICAgICBhdmF0YXI6IGRhdGEuYXZhdGFyLFxyXG4gICAgICB9KTtcclxuICAgICAgcG9wdXBXaXRoUHJvZmlsZS5jbG9zZSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSlcclxuICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgcmVuZGVyTG9hZGluZyhcInBvcHVwLWZvcm1cIiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8g0L/RgNC+0LzQuNGBINC00LvRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0LTQsNC90L3Ri9GFINC60LDRgNGC0LjQvdC60Lgg0Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcblByb21pc2UuYWxsKFtpbml0aWFsY2FyZHMsIGdldFVzZXJJbmZvQXBpXSlcclxuICAudGhlbigoW2NhcmRzSW5pdCwgZ2V0VXNlckluZm9BcGldKSA9PiB7XHJcbiAgICB1c2VySW5mby5zZXRVc2VySWQoZ2V0VXNlckluZm9BcGkuX2lkKTtcclxuICAgIGNhcmRzTGlzdC5yZW5kZXJJdGVtcyhjYXJkc0luaXQpO1xyXG4gICAgdXNlckluZm8uc2V0VXNlckluZm8oe1xyXG4gICAgICB1c2VybmFtZTogZ2V0VXNlckluZm9BcGkubmFtZSxcclxuICAgICAgam9iOiBnZXRVc2VySW5mb0FwaS5hYm91dCxcclxuICAgICAgYXZhdGFyOiBnZXRVc2VySW5mb0FwaS5hdmF0YXIsXHJcbiAgICB9KTtcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH0pO1xyXG5cclxuLy8g0YHQu9GD0YjQsNGC0LXQu9C4XHJcblxyXG4vLyDQvtGC0LrRgNGL0YLQuNC1INC/0L7Qvy3QsNC/0LAg0LTQvtCx0L7QstC70LXQvdC40Y8g0LrQsNGA0YLQuNC90LrQuFxyXG5jYXJkT3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHZhbGlkaXR5Q2FyZC5kaXNhYmxlU3VibWl0QnV0dG9uKCk7XHJcbiAgcG9wdXBXaXRoQ2FyZC5vcGVuKCk7XHJcbn0pO1xyXG5cclxuLy/QodC+0YXRgNCw0L3QtdC90LjQtSDQtNCw0L3QvdGL0YUg0LTQu9GPINC/0L7Qvy3QsNC/0LAg0YTQvtGA0LzRiyDQv9GA0L7RhNC40LvRjFxyXG5wcm9maWxlT3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHZhbGlkaXR5Rm9ybS5kaXNhYmxlU3VibWl0QnV0dG9uKCk7XHJcbiAgY29uc3QgeyB1c2VybmFtZSwgam9iIH0gPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xyXG4gIG5hbWVJbnB1dC52YWx1ZSA9IHVzZXJuYW1lOyAvL9C30LDQv9C40YHRi9Cy0LDQtdC8INC00LDQvdC90YvQtSDQsiDQuNC90L/Rg9GCINC40Lcg0L/RgNC+0YTQsNC50LvQsFxyXG4gIGpvYklucHV0LnZhbHVlID0gam9iO1xyXG4gIHBvcHVwV2l0aFByb2ZpbGUub3BlbigpO1xyXG59KTtcclxuXHJcbi8v0L7RgtC60YDRi9GC0LjQtSDQv9C+0L/QsNC/0LAg0YEg0LDQstCw0YLQsNGA0L7QvFxyXG5hdmF0YXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICB2YWxpZGl0eUF2YXRhci5kaXNhYmxlU3VibWl0QnV0dG9uKCk7XHJcbiAgcG9wdXBBdmF0YXIub3BlbigpO1xyXG59KTtcclxuXHJcbi8vIFxyXG52YWxpZGl0eUZvcm0uZW5hYmxlVmFsaWRhdGlvbigpO1xyXG52YWxpZGl0eUNhcmQuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG52YWxpZGl0eUF2YXRhci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5wb3B1cFdpdGhPcGVuSW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxucG9wdXBDb25maXJtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbnBvcHVwV2l0aFByb2ZpbGUuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxucG9wdXBXaXRoQ2FyZC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5wb3B1cEF2YXRhci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4iXSwibmFtZXMiOlsiQXBpIiwiY29uZmlnIiwiX2Jhc2VVcmwiLCJiYXNlVXJsIiwiX2hlYWRlcnMiLCJoZWFkZXJzIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsInN0YXR1cyIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsIl9oYW5kbGVQcm9taXNlRXJyIiwiZGF0YSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYXZhdGFyIiwiaWQiLCJDYXJkIiwiY2FyZFNlbGVjdG9yIiwidXNlcklkIiwiaGFuZGxlQ2FyZENsaWNrIiwiaGFuZGxlQmluQ2xpY2siLCJoYW5kbGVMaWtlQ2xpY2siLCJfdGV4dCIsIm5hbWUiLCJfaW1hZ2UiLCJsaW5rIiwiX2lkIiwiX2xpa2VzIiwibGlrZXMiLCJfb3duZXJJZCIsIm93bmVySWQiLCJfY2FyZFNlbGVjdG9yIiwiX2hhbmRsZUNhcmRDbGljayIsIl91c2VySWQiLCJfaGFuZGxlQmluQ2xpY2siLCJfaGFuZGxlTGlrZUNsaWNrIiwiX2xpa2VDb3VudGVyIiwibGlrZUNvdW50ZXIiLCJwaG90b0NhcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwic29tZSIsIml0ZW0iLCJfZWxlbWVudCIsIl9nZXRUZW1wbGF0ZSIsIl9waG90b0ltYWdlIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJfYmluRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIl9lbGVtZW50TGlrZUJ1dHRvbiIsIl90b2dnbGVMaWtlc1N0YXRlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiX2VsZW1lbnRMaWtlQ291bnRlciIsImxlbmd0aCIsImlzTGlrZWQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwiRm9ybVZhbGlkYXRvciIsImZvcm1MaXN0IiwiX2Zvcm1TZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtTGlzdCIsIl9idXR0b25FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZXJyb3JFbGVtZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaW5wdXRMaXN0IiwidmFsaWRpdHkiLCJ2YWxpZCIsImRpc2FibGVkIiwiX2hhc0ludmFsaWRJbnB1dCIsImRpc2FibGVTdWJtaXRCdXR0b24iLCJfZW5hYmxlU3VibWl0QnV0dG9uIiwiX3Nob3dJbnB1dEVycm9yIiwiX2hpZGVJbnB1dEVycm9yIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwia2V5IiwiY2xvc2UiLCJfcG9wdXAiLCJfaGFuZGxlRXNjQ2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsIlBvcHVwV2l0aEZvcm0iLCJoYW5kbGVGb3JtU3VibWl0IiwiX3BvcHVwRm9ybUNhcmQiLCJfaGFuZGxlRm9ybVN1Ym1pdCIsImlucHV0VmFsdWVzIiwiaW5wdXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZSIsImltYWdlUGhvdG8iLCJpbWFnZVRleHQiLCJfaW1hZ2VQaG90byIsIl9pbWFnZVRleHQiLCJjYXJkbmFtZSIsIlBvcHVwV2l0aFN1Ym1pdCIsIl9mb3JtQ29uZmlybSIsIm15Q2FyZCIsIlNlY3Rpb24iLCJyZW5kZXJlciIsImNvbnRhaW5lclNlbGVjdG9yIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImNhcmRFbGVtZW50IiwicHJlcGVuZCIsIml0ZW1zIiwiVXNlckluZm8iLCJ1c2VybmFtZSIsImpvYiIsIl91c2VybmFtZSIsIl9qb2IiLCJfYXZhdGFyIiwiaW5wdXRVc2VySW5mbyIsInByb2ZpbGVPcGVuQnV0dG9uIiwicHJvZmlsZUZvcm0iLCJuYW1lSW5wdXQiLCJqb2JJbnB1dCIsImNhcmRzUG9wdXAiLCJjYXJkT3BlbkJ1dHRvbiIsImZvcm1DYXJkIiwiYXZhdGFyQnV0dG9uIiwiYXZhdGFyUG9wdXAiLCJyZW5kZXJMb2FkaW5nIiwicG9wdXAiLCJpc0xvYWRpbmciLCJjdXJyZW50QWN0aXZlQnV0dG9uIiwiaW5pdGlhbENhcmRzIiwib2JqIiwiYXBpIiwiYXV0aG9yaXphdGlvbiIsInZhbGlkaXR5Rm9ybSIsInZhbGlkaXR5Q2FyZCIsInZhbGlkaXR5QXZhdGFyIiwicG9wdXBXaXRoT3BlbkltYWdlIiwib3BlbiIsInBvcHVwQ29uZmlybSIsImNyZWF0ZUNhcmQiLCJjYXJkIiwiY29uZmlybURlbGV0ZU15Q2FyZCIsImRlbGV0ZU5ld0NhcmQiLCJnZXRJZCIsImhhbmRsZURlbGV0ZUJpbkNsaWNrIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9uIiwiZGVsZXRlTGlrZSIsInB1dExpa2VDYXJkIiwic2V0TGlrZXMiLCJ1c2VySW5mbyIsImdldFVzZXJJZCIsImdlbmVyYXRlQ2FyZCIsImNhcmRzTGlzdCIsInJlbmRlckNhcmQiLCJpbml0aWFsY2FyZHMiLCJnZXRJbml0aWFsQ2FyZHMiLCJyZXN1bHQiLCJjYXJkc0luaXQiLCJtYXAiLCJvd25lciIsInBvcHVwV2l0aENhcmQiLCJoYW5kbGVDYXJkQWRkU3VibWl0IiwiZ2V0VXNlckluZm9BcGkiLCJnZXRVc2VySW5mb0Zyb21BcGkiLCJwb3B1cFdpdGhQcm9maWxlIiwiaGFuZGxlRm9ybVN1Ym1pdFVzZXIiLCJwb3B1cEF2YXRhciIsImhhbmRsZUZvcm1TdWJtaXRBdmF0YXIiLCJhZGRJdGVtIiwiYWRkTmV3Q2FyZCIsImZpbmFsbHkiLCJhZGRVc2VyQXZhdGFyIiwic2V0VXNlckluZm8iLCJhYm91dCIsImFkZFVzZXJJbmZvIiwiYWxsIiwic2V0VXNlcklkIiwicmVuZGVySXRlbXMiLCJnZXRVc2VySW5mbyIsImVuYWJsZVZhbGlkYXRpb24iLCJzZXRFdmVudExpc3RlbmVycyJdLCJzb3VyY2VSb290IjoiIn0=
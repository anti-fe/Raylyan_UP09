//Подключение модулей
import { openModal, closeModal, validationModal } from "./modules/modal-window.js";
import { openAccord } from "./modules/accord.js";
import { accordCalc } from "./modules/accord-calc.js";

//Объявление переменных
const callBtns = document.querySelectorAll('.call-btn'),
    popupCall = document.querySelector('.popup-call'),
    closePopup = popupCall.querySelector('.popup-close');
const questAccord = document.querySelector('.questions .panel-group');
const gaugingButton = document.querySelector('.gauging-button'),
    popupCheck = document.querySelector('.popup-check'),
    closePopupCheck = popupCheck.querySelector('.popup-close');
const nameInp = document.querySelector('#name_1'),
    phoneInp = document.querySelector('#phone_1');
const nameInp2 = document.querySelector('#name_2'),
    phoneInp2 = document.querySelector('#phone_2');
const nameInp12 = document.querySelector('#name_12'),
    phoneInp12 = document.querySelector('#phone_12');
const accordion = document.querySelector('#accordion');

//Вызов функций
callBtns.forEach(item => {
    item.addEventListener('click', ()=>{
        openModal(popupCall);
    })
})
closePopup.addEventListener('click', (e)=>{
    e.preventDefault();
    closeModal(popupCall, nameInp, phoneInp);
})
popupCall.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!e.target.closest('.popup-content')) {
        closeModal(popupCall, nameInp, phoneInp);
    }
    if(e.target.classList.contains('capture-form-btn')) {
        validationModal(popupCall, nameInp, phoneInp);
    }
})
questAccord.addEventListener('click', (e)=>{
    e.preventDefault();
    e.target.closest('.panel') ? openAccord(e.target.closest('.panel')) : none;
})
gaugingButton.addEventListener('click',(e)=>{
    e.preventDefault();
    openModal(popupCheck);
})
closePopupCheck.addEventListener('click', (e)=>{
    e.preventDefault();
    closeModal(popupCheck, nameInp12, phoneInp12);
})
popupCheck.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!e.target.closest('.popup-content')) {
        closeModal(popupCheck, nameInp12, phoneInp12);
    }
    if(e.target.classList.contains('capture-form-btn')) {
        validationModal(popupCheck, nameInp12, phoneInp12);
    }
})
accordion.addEventListener('click', (e)=>{
    const targetItem = e.target;
    if(!targetItem.closest('.onoffswitch')) {
        e.preventDefault();
        accordCalc(targetItem);
    }
})
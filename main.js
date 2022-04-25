//Подключение модулей
import { openModal, closeModal, validationModal } from "./modules/modal-window.js";
import { openAccord } from "./modules/accord.js";
import { accordCalc, calculating } from "./modules/accord-calc.js";

//Объявление переменных
const sentence = document.querySelector('.sentence'); 
const callBtns = document.querySelectorAll('.call-btn'),
    popupCall = document.querySelector('.popup-call'),
    closePopup = popupCall.querySelector('.popup-close');
const questAccord = document.querySelector('.questions .panel-group');
const gaugingButton = document.querySelector('.gauging-button'),
    popupCheck = document.querySelector('.popup-check'),
    closePopupCheck = popupCheck.querySelector('.popup-close');
const popupDiscount = document.querySelector('.popup-discount'),
    pupupDiscClose = popupDiscount.querySelector('.capture-form .popup-close'),
    nameInp11 = document.querySelector('#name_11'),
    phoneInp11 = document.querySelector('#phone_11');
const nameInp = document.querySelector('#name_1'),
    phoneInp = document.querySelector('#phone_1');
const nameInp12 = document.querySelector('#name_12'),
    phoneInp12 = document.querySelector('#phone_12');
const accordion = document.querySelector('#accordion');
const checkboxAccord = document.querySelectorAll('.onoffswitch-checkbox');
const calcRes = document.querySelector('#calc-result');

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
sentence.addEventListener('click', (e)=>{
    e.preventDefault();
    if(e.target.classList.contains('discount-btn')) {
        openModal(popupDiscount);
    } else if (e.target.classList.contains('add-sentence-btn')) {
        const allItems = Array.from(e.target.parentElement.children);
        allItems.forEach(item=>{
            if (item.classList.contains('hidden')) {
                item.classList.remove('hidden');
            } else if (item.classList.contains('visible-sm-block')) {
                item.classList.remove('visible-sm-block');
            }
        })
        e.target.style.display = 'none';
    }
})
pupupDiscClose.addEventListener('click', (e)=>{
    e.preventDefault();
    closeModal(popupDiscount, nameInp11, phoneInp11);
})
popupDiscount.addEventListener('click', (e)=>{
    e.preventDefault()
    if(!e.target.closest('.popup-content')) {
        closeModal(popupDiscount, nameInp11, phoneInp11);
    } 
    if(e.target.classList.contains('capture-form-btn')) {
        
        validationModal(popupDiscount, nameInp11, phoneInp11);
    }
})
checkboxAccord.forEach(cb=>{
    if (cb.name == 'onoffswitch') {
        const panelBody = document.querySelector('#collapseTwo .panel-body').children;
        if(cb.checked) {
            panelBody[3].style.display = 'none';
            panelBody[4].style.display = 'none';
            panelBody[5].style.display = 'none';
        } else {
            panelBody[3].style.display = 'inline-block';
            panelBody[4].style.display = 'inline-block';
            panelBody[5].style.display = 'inline-block';
        }
    }
    cb.addEventListener('input', ()=>{
        calculating(cb, calcRes);
    })
})
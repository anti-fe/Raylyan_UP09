//Подключение модулей
import { openModal, closeModal } from "./modules/modal-window.js";

//Объявление переменных
const callBtns = document.querySelectorAll('.call-btn'),
    popupCall = document.querySelector('.popup-call'),
    closePopup = popupCall.querySelector('.popup-close');


//Вызов функций
callBtns.forEach(item => {
    item.addEventListener('click', ()=>{
        openModal(popupCall);
    })
})
closePopup.addEventListener('click', (e)=>{
    e.preventDefault();
    closeModal(popupCall);
})
popupCall.addEventListener('click', (e)=>{
    if(!e.target.closest('.popup-content')) {
        closeModal(popupCall);
    }
})
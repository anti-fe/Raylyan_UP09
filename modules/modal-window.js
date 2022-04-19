//Открытие модального окна
export const openModal = (modalWindow) => {
    modalWindow.style.display = 'block';
}
//Закрытие модального окна
export const closeModal = (modalWindow) => {
    const nameInp = modalWindow.querySelector('#name_1'),
        phoneInp = modalWindow.querySelector('#phone_1');
    modalWindow.style.display = 'none';
    nameInp.value = '';
    phoneInp.value = '';
    nameInp.style.border = '1px solid #ddd';
    phoneInp.style.border = '1px solid #ddd';
}
//Валидация модального окна
export const validationModal = (modalWindow) => {
    const form = document.querySelector('.capture-form');
    const phoneRegEx = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,11}(\s*)?$/;
    const nameRegEx = /^[а-я ,.'-]+$/i;
    const nameInp = modalWindow.querySelector('#name_1'),
        phoneInp = modalWindow.querySelector('#phone_1');
    //Name
    nameRegEx.test(nameInp.value) ? nameInp.style.border = '2px solid green' : nameInp.style.border = '2px solid red';
    //Phone
    phoneRegEx.test(phoneInp.value) ? phoneInp.style.border = '2px solid green' : phoneInp.style.border = '2px solid red';
    //Send form
    if(nameRegEx.test(nameInp.value) && phoneRegEx.test(phoneInp.value)) {
        const data = {
            "user_name": nameInp.value.trim(),
            "user_phone": phoneInp.value.trim()
        } 
        const fch = fetch("./server.php", {
            method: "POST",
            body: JSON.stringify(data),
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
} 
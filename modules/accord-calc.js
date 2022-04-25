export const accordCalc = (targetItem)=>{
    const allPanel = document.querySelectorAll('.panel-collapse');
    if(targetItem.closest('.construct-btn')) {
        if(targetItem.tagName == 'A' && targetItem.closest('.construct-btn') ||
        targetItem.closest('.construct-btn').tagName == 'A') {
            const btnNext = targetItem.closest('.panel').querySelector('.construct-btn');
            const btnNextNav = btnNext.getAttribute('href').slice(1);
            
            allPanel.forEach(item=>{
                //Закрываем все panel 
                if(item.classList.contains('in')) {
                    item.classList.remove('in');
                }
                //Открываем следующую panel 
                if(item.getAttribute('id') == btnNextNav) {
                    item.classList.add('in');
                } 
            })

        }
    } else if(targetItem.className == 'panel-heading' || 
    targetItem.className == 'panel-title' ||
    targetItem.tagName == 'A' ||
    targetItem.className == 'link-text') {
        const parentItem = targetItem.closest('.panel');
        const bodyItem = parentItem.querySelector('.panel-collapse');
        //Закрытие всех остальных panel
        allPanel.forEach(item=>{
            if(item.classList.contains('in')) {
                item.classList.remove('in');
            }
        })
        //Открытие или закрытие panel
        bodyItem.classList.toggle('in');
    }
}
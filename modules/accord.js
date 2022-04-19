export const openAccord = (item)=>{
    const itemText = item.querySelector('.panel-collapse');
    const itemLink = item.querySelector('a');
    const parentItem = item.parentElement;
    const allItems = parentItem.querySelectorAll('.panel');

    const close = (itemTextArg, itemLinkArg)=>{
        itemTextArg.style.display = 'none';
        itemLinkArg.classList.add('collapsed');
    }
    const open = (itemTextArg, itemLinkArg)=>{
        itemTextArg.style.display = 'block';
        itemLinkArg.classList.remove('collapsed');
    }
    if(!itemLink.classList.contains('collapsed')) {
        close(itemText, itemLink);
    } else {
        allItems.forEach(el => {
            const itemSecLink = el.querySelector('a');
            const itemSecText = el.querySelector('.panel-collapse');
            close(itemSecText, itemSecLink);
        });
        open(itemText, itemLink);
    }
}